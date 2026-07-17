import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Blog = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  tags: string[];
};

export type BlogWithContent = {
  frontmatter: Blog;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllBlogs(): Blog[] {
  const files = fs.readdirSync(BLOG_DIR);

  return files
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        author: data.author ?? "",
        excerpt: data.excerpt ?? "",
        image: data.image ?? "",
        tags: data.tags ?? [],
      } as Blog;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}

export function getBlogBySlug(slug: string): BlogWithContent | null {
  const extensions = [".mdx", ".md"];

  for (const ext of extensions) {
    const filePath = path.join(BLOG_DIR, `${slug}${ext}`);

    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        frontmatter: {
          slug,
          title: data.title ?? "",
          date: data.date ?? "",
          author: data.author ?? "",
          excerpt: data.excerpt ?? "",
          image: data.image ?? "",
          tags: data.tags,
        },
        content,
      };
    }
  }

  return null;
}