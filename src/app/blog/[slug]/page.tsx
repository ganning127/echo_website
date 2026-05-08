import { getBlogBySlug, getAllBlogs } from "@/lib/blog";
import { Blog } from "@/lib/blog";
import { notFound } from "next/navigation";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog: Blog) => ({ slug: blog.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);
  if (!blog) return notFound();

  // Compile the raw MDX string server-side using @mdx-js/mdx.
  // This avoids all bundler/dynamic-import issues entirely — we read the file
  // in getBlogBySlug (already done), compile it here, and render it directly.
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

  return (
           <div className="min-h-screen">
             <NavBar />

             <Suspense fallback={<div>Loading...</div>}>
             <div>          
              {/* HERO */}
      <div className="bg-[#DBECF1] text-black pt-32 pb-16 text-center">
        <h1 className="text-4xl font-bold">{blog.frontmatter.title}</h1>
        <p className="mt-2 text-sm">
          {blog.frontmatter.date} • {blog.frontmatter.author}
        </p>
      </div>
     <div className="p-6 w-5/6 mx-auto">

      {/* CONTENT */}
      <div className="bg-white py-12 px-6 mx-auto">
        <div className="prose prose-lg w-5/6 mx-auto text-xl">
          <PostContent />
        </div>
      </div>
        </div>
                  </div> 
             </Suspense>
       
             <Footer />
           </div>
  );
}