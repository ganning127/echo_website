import { Metadata } from "next";
import { Suspense } from "react";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import BlogList from "@/components/blog/bloglist";
import { getAllBlogs } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Plaqtrick's Chronicles | Blogs by ECHO",
  description:
    "Indulge in Plaqtrick's Chronicles! These ooey-gooey blog posts are sure to stick in your mind and away from your arteries! Check out what the ECHO team has to say by perusing the articles.",
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
    <div className="min-h-screen bg-[#DBECF1]">
      <NavBar />

      <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
        <section className="pb-16 pt-10 lg:pt-36">
          {/* Page Header */}
          <div className="max-w-5xl mx-auto px-6 text-center mb-12">
            <h1 className="text-5xl mb-5">
              Plaqtrick&apos;s Chronicles
            </h1>

            <p className="text-md md:text-2xl">
              Indulge in Plaqtrick&apos;s Chronicles! These ooey-gooey blog posts
              are sure to stick in your mind and away from your arteries! Check
              out what the ECHO team has to say by perusing the articles below.
            </p>
          </div>

          {/* Blog List + Filters */}
          <BlogList blogs={blogs} />
        </section>
      </Suspense>

      <Footer />
    </div>
  );
}