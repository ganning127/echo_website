import { Blog } from "@/lib/blog";
import Link from "next/link";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="group block">
      <div
        className="
          flex flex-col md:flex-row
          bg-white border border-gray-200 rounded-2xl
          overflow-hidden
          shadow-sm
          transition-all duration-300 ease-out
          group-hover:shadow-xl
          group-hover:-translate-y-1
          group-hover:border-gray-300
          max-w-6xl mx-auto
        "
      >

        {/* IMAGE */}
        <div
          className="
            relative
            w-full md:w-80
            h-90 md:h-auto
            shrink-0
            overflow-hidden
          "
        >
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="
                absolute inset-0
                w-full h-full
                object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />
          ) : (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-300 text-xs">No image</span>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between p-6 md:p-8 min-w-0 flex-1">

          <div>

            {/* TAGS */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      inline-flex items-center
                      rounded-full
                      bg-[#1876d0]/10
                      px-3 py-1
                      text-xs font-semibold
                      tracking-wide
                      text-[#013161]
                      border border-[#7C2D36]/20
                    "
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* TITLE */}
            <h3
              className="
                text-2xl md:text-3xl
                font-extrabold
                uppercase
                tracking-wide
                text-gray-900
                transition-colors duration-200
                group-hover:text-[#1876d0]
                line-clamp-2 text-left
              "
            >
              {blog.title}
            </h3>

            {/* EXCERPT */}
            <p
              className="
                text-base text-gray-600
                mt-4
                leading-relaxed
                line-clamp-3 text-left
              "
            >
              {blog.excerpt}
            </p>
          </div>

          {/* READ MORE */}
          <div className="mt-6 flex items-center gap-2">
            <span
              className="
                text-xs font-bold uppercase tracking-[0.2em]
                text-gray-800
                transition-colors duration-200
                group-hover:text-[#1876d0]
              "
            >
              Read More
            </span>

            <span
              className="
                transition-transform duration-300
                group-hover:translate-x-1
                text-[#7C2D36]
              "
            >
              →
            </span>
          </div>

        </div>
      </div>
    </Link>
  );
};