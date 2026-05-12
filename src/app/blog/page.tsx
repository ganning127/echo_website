import { getAllBlogs } from "@/lib/blog";
import { BlogCard } from "@/components/Cards/BlogCard";
import { Blog } from "@/lib/blog";
import { NavBar } from "@/components/NavBar";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
       <div className="bg-[#DBECF1] min-h-screen">
         <NavBar />
   
         <Suspense fallback={<div>Loading...</div>}>
         <div className="pb-12 text-center lg:pt-36 pt-0">
         <h1 className="text-4xl">ECHO Blog</h1>
         <h2 className="text-2xl">Coming soon!</h2>
              </div> 
         </Suspense>
   
         <Footer />
       </div>

  );
}