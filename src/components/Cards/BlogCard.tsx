import { Blog } from "@/lib/blog";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <div className="p-4">
        <p className="text-sm text-gray-500">
          {blog.date} • {blog.author}
        </p>

        <h3 className="text-xl font-bold mt-2">{blog.title}</h3>

        <p className="text-gray-600 mt-2 line-clamp-2">
          {blog.excerpt}
        </p>

        <a href={`/blog/${blog.slug}`}>
          <button className="mt-4">Read More</button>
        </a>
      </div>
    </div>
  );
};