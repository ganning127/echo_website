import { getBlogBySlug, getAllBlogs } from "@/lib/blog";
import { Blog } from "@/lib/blog";
import { notFound } from "next/navigation";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

  import { headers } from "next/headers";


export async function generateStaticParams() {
  const blogs = getAllBlogs();
  
  return blogs.map((blog: Blog) => ({ slug: blog.slug }));
}

function estimateReadTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | ECHO",
    };
  }

  const pageUrl = `https://edecho.org/blog/${slug}`;
  
  const imageUrl = `https://edecho.org${blog.frontmatter.image}`;

  return {
    title: `${blog.frontmatter.title} | ECHO Blog`,
    description: blog.frontmatter.excerpt,

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: blog.frontmatter.title,
      description: blog.frontmatter.excerpt,
      url: pageUrl,
      siteName: "ECHO",
      type: "article",
       publishedTime: blog.frontmatter.date,
  authors: [blog.frontmatter.author],

images: [
  {
    url: imageUrl,
    width: 1200,
    height: 630,
    alt: blog.frontmatter.title,
  },
],
    },

twitter: {
  card: "summary_large_image",
  images: [imageUrl],
}
  };
}


export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);
  const blogs = getAllBlogs();

// Optional: sort newest first
const sortedBlogs = [...blogs].sort(
  (a, b) =>
    new Date(b.date).getTime() -
    new Date(a.date).getTime()
);

const currentIndex = sortedBlogs.findIndex((b) => b.slug === slug);

const previousBlog =
  currentIndex < sortedBlogs.length - 1
    ? sortedBlogs[currentIndex + 1]
    : null;

const nextBlog =
  currentIndex > 0
    ? sortedBlogs[currentIndex - 1]
    : null;

  if (!blog) return notFound();

  const readTime = estimateReadTime(blog.content);

  let PostContent: React.ComponentType;
  try {
    const { default: Content } = await evaluate(blog.content, {
      ...(runtime as any),
      baseUrl: import.meta.url,
    });
    PostContent = Content;
  } catch (e) {
    console.error("MDX compile error:", e);
    return notFound();
  }

const headersList = await headers();

const host = headersList.get("host");
const protocol = process.env.NODE_ENV === "development"
  ? "http"
  : "https";

const baseUrl = `${protocol}://${host}`;

const pageUrl = `${baseUrl}/blog/${slug}`;
const imageUrl = `${baseUrl}${blog.frontmatter.image}`;

const encodedUrl = encodeURIComponent(pageUrl);
const encodedTitle = encodeURIComponent(blog.frontmatter.title);

const shareLinks = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodeURIComponent(
  `Check out this article from ECHO: ${blog.frontmatter.title}`
)}`,x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(
  `Check out "${blog.frontmatter.title}" from ECHO (Early Cardiovascular Health Outreach)!`
)}`,
  email: `mailto:?subject=${encodedTitle}&body=I wanted to share this blog from ECHO (Early Cardiovascular Health Outreach): ${pageUrl}`,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: blog.frontmatter.title,
  description: blog.frontmatter.excerpt,
  image: [imageUrl],
  datePublished: blog.frontmatter.date,
  author: {
    "@type": "Organization",
    name: blog.frontmatter.author,
  },
  publisher: {
    "@type": "Organization",
    name: "ECHO",
    logo: {
      "@type": "ImageObject",
      url: "https://edecho.org/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": pageUrl,
  },
};

  return (
    
    <div className="min-h-screen bg-[#fffbef]">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <div>
         

          <div className="p-6 w-6/6 md:w-4/6 mx-auto pt-10 md:pt-32">
         {/* BREADCRUMB / BACK LINK */}
<div className="mb-6">


  <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
    <Link
      href="/"
      className="hover:text-[#7C2D36] transition-colors"
    >
      Home
    </Link>

    <span>/</span>

    <Link
      href="/blog"
      className="hover:text-[#7C2D36] transition-colors"
    >
      Blog
    </Link>

    <span>/</span>

    <span className="text-gray-600 truncate">
      {blog.frontmatter.title}
    </span>
  </div>

</div>
            <div className="bg-white py-12 px-6 mx-auto border border-24 border-purple-200 rounded-xl ">
                      <div className="text-black  text-center">
            <h1 className="text-2xl text-wrap md:text-4xl font-bold">{blog.frontmatter.title}</h1>
            <p className="mt-2 text-sm">
              {blog.frontmatter.date} • {blog.frontmatter.author}
            </p>
            <p className="mt-1 text-sm text-gray-500">{readTime} min read</p>
          </div>
          {/* SHARE BAR */}
<div className="py-10 flex flex-col sm:flex-row items-center justify-center gap-4">

  <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
    Share
  </span>

  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">

    {/* Facebook */}
    <a
      href={shareLinks.facebook}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on Facebook"
      className="
        w-full sm:w-auto
        flex items-center justify-center 
        px-5 py-3
        rounded-xl
        border border-gray-200
        text-sm font-medium text-gray-700
        transition-all duration-200
        hover:bg-[#1877F2]
        hover:text-white
        hover:border-[#1877F2]
      "
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>

      <span></span>
    </a>

    {/* X / Twitter */}
    <a
      href={shareLinks.x}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on X"
      className="
        w-full sm:w-auto
        flex items-center justify-center 
        px-5 py-3
        rounded-xl
        border border-gray-200
        text-sm font-medium text-gray-700
        transition-all duration-200
        hover:bg-black
        hover:text-white
        hover:border-black
      "
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>

      <span></span>
    </a>

    {/* Email */}
    <a
      href={shareLinks.email}
      aria-label="Share via Email"
      className="
        w-full sm:w-auto
        flex items-center justify-center 
        px-5 py-3
        rounded-xl
        border border-gray-200
        text-sm font-medium text-gray-700
        transition-all duration-200
        hover:bg-[#7C2D36]
        hover:text-white
        hover:border-[#7C2D36] gap-2
      "
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>

      <span>Email</span>
    </a>

  </div>
</div>
              <div className="prose prose-lg mx-auto prose-p:text-xl prose-p:leading-relaxed prose-p:mb-6">
                <PostContent />
                
              </div>
              
            </div>

                 <div className="mt-16 pt-8 border-t border-gray-200">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* Previous */}
    <div>
      {previousBlog && (
        <Link
          href={`/blog/${previousBlog.slug}`}
          className="
            group block
            rounded-2xl
            p-5
            hover:bg-gray-50
            transition-all duration-200
          "
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Previous Article
          </p>

          <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#1876d0] transition-colors">
            ← {previousBlog.title}
          </h3>
        </Link>
      )}
    </div>

    {/* Next */}
    <div>
      {nextBlog && (
        <Link
          href={`/blog/${nextBlog.slug}`}
          className="
            group block
            rounded-2xl
            p-5
            text-left md:text-right
            hover:bg-gray-50
            transition-all duration-200
          "
        >
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Next Article
          </p>

          <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#1876d0] transition-colors">
            {nextBlog.title} →
          </h3>
        </Link>
      )}
    </div>

  </div>

</div>
          </div>
   
        </div>
      </Suspense>

      <Footer />
    </div>
  );
}