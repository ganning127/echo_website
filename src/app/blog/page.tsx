import { getAllBlogs } from "@/lib/blog";
import { BlogCard } from "@/components/Cards/BlogCard";
import { Blog } from "@/lib/blog";
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plaqtrick's Chronicles | Blogs by ECHO",
  description:
    "Indulge in Plaqtrick's Chronicles! These ooey-gooey blog posts are sure to stick in your mind and away from your arteries! Check out what the ECHO team has to say by perusing the articles below!",
  keywords: [
    "ECHO blog",
    "Echo articles",
    "blog",
    "cardiovascular wellness through articles",
  ],
};

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="bg-[#DBECF1] min-h-screen">
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <div className="pb-12 text-center lg:pt-36 pt-10">
          <h1 className="text-5xl mb-5">Plaqtrick&apos;s Chronicles</h1>
          <p className="max-w-5/6 md:max-w-4/6 mx-auto text-md md:text-2xl mb-10">
            {" "}
            Indulge in Plaqtrick&apos;s Chronicles! These ooey-gooey blog posts
            are sure to stick in your mind and away from your arteries! Check
            out what the ECHO team has to say by perusing the articles below!
          </p>
          <div className="p-6 grid grid-cols-1 md:grid-cols-1 gap-6">
            {blogs.map((blog: Blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </Suspense>

      <Footer />
    </div>
  );
}
