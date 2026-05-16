import { Blog } from "@/lib/blog";
import Link from "next/link";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="group block">
      <div className="
        flex flex-row items-stretch
        bg-white border border-gray-200 rounded-xl
        overflow-hidden
        shadow-sm
        transition-all duration-300 ease-out
        group-hover:shadow-lg group-hover:-translate-y-0.5 group-hover:border-gray-300 max-w-6xl mx-auto
      ">

        {/* LEFT — square 1:1 image */}
        <div className="relative w-40 shrink-0 self-stretch">
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-300 text-xs">No image</span>
            </div>
          )}
        </div>

        {/* RIGHT — text content */}
        <div className="flex text-left flex-col justify-between pl-10 pb-5 pt-5 pr-5 min-w-0">
          <div>
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex gap-2 mb-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold uppercase tracking-widest text-[#7C2D36]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="
              font-extrabold uppercase tracking-wide text-gray-900
              transition-colors duration-200 group-hover:text-[#7C2D36]
              line-clamp-2 text-3xl
            ">
              {blog.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          {/* Read More */}
          <p className="
            mt-4 text-xs font-bold uppercase tracking-widest text-gray-800
            transition-colors duration-200 group-hover:text-[#7C2D36]
          ">
            Read More
          </p>
        </div>

      </div>
    </Link>
  );
};