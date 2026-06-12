import fs from 'fs/promises';
import path from 'path';

type SitemapEntry = {
  url: string;
  lastModified: string;
};

// paths to explicitly disallow / unindex from the generated sitemap
const DISALLOW: string[] = [
  '/hawaiifoodbank/k4k/echo-and-friends-picnic-placemat',
  '/contact/story-submission',
  '/contact/question'
];

// explicit individual paths to include even if they don't appear via normal page file scanning
const INCLUDE: string[] = [
  // '/blog/example-post',
];

// parent folders to scan for individual item pages (children directories become routes)
const EXTRA_PARENTS = ['blog', 'activity', 'event'];

const PAGE_FILE_RE = /^page\.(tsx|ts|jsx|js)$/i;

async function walk(dir: string, baseDir: string): Promise<SitemapEntry[]> {
  const entries: SitemapEntry[] = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const full = path.join(dir, item.name);

    if (item.isDirectory()) {
      entries.push(...(await walk(full, baseDir)));
      continue;
    }

    if (item.isFile() && PAGE_FILE_RE.test(item.name)) {
      // compute route from directory relative to src/app
      const relDir = path.relative(baseDir, dir).split(path.sep).join('/');

      // skip dynamic routes (contain [ or ])
      if (relDir.includes('[') || relDir.includes(']')) continue;

      const route = relDir === '' ? '/' : `/${relDir}`;

      const stat = await fs.stat(full);
      entries.push({ url: route, lastModified: stat.mtime.toISOString() });
    }
  }

  return entries;
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const projectRoot = process.cwd();
  const appDir = path.join(projectRoot, 'src', 'app');

  try {
    const stats = await fs.stat(appDir);
    if (!stats.isDirectory()) return [];
  } catch (e) {
    return [];
  }

  const pages = await walk(appDir, appDir);

  // scan specified parent folders for individual item pages (e.g. src/app/blog/<slug>/page.tsx)
  for (const parent of EXTRA_PARENTS) {
    const parentDir = path.join(appDir, parent);
    try {
      const stat = await fs.stat(parentDir);
      if (!stat.isDirectory()) continue;
    } catch (e) {
      continue;
    }

    const items = await fs.readdir(parentDir, { withFileTypes: true });
    for (const it of items) {
      if (!it.isDirectory()) continue;
      if (it.name.includes('[') || it.name.includes(']')) continue; // skip dynamic-name dirs

      const childDir = path.join(parentDir, it.name);
      // check for a page.* file inside
      const childFiles = await fs.readdir(childDir).catch(() => []);
      if (!childFiles.some((f) => PAGE_FILE_RE.test(f))) continue;

      const route = `/${parent}/${it.name}`;
      const stat = await fs.stat(path.join(childDir, childFiles.find((f) => PAGE_FILE_RE.test(f))!)).catch(() => null);
      const mtime = stat ? stat.mtime.toISOString() : new Date().toISOString();
      pages.push({ url: route, lastModified: mtime });
    }
  }

  // include explicit includes
  for (const u of INCLUDE) {
    pages.push({ url: u, lastModified: new Date().toISOString() });
  }

  // ensure unique and sort
  const map = new Map<string, SitemapEntry>();
  for (const p of pages) map.set(p.url, p);

  // filter disallowed
  const result = Array.from(map.values()).filter((e) => !DISALLOW.some((d) => e.url === d || e.url.startsWith(d + '/')));

  return result.sort((a, b) => a.url.localeCompare(b.url));
}
