"use client";

import { useMemo, useState } from "react";
import { Blog } from "@/lib/blog";
import { BlogCard } from "@/components/Cards/BlogCard";
import BlogFilters from "@/components/blog/BlogFilters";

interface BlogListProps {
  blogs: Blog[];
}

type SortOption = "newest" | "oldest" | "az" | "za";

export default function BlogList({ blogs }: BlogListProps) {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // Get every unique tag from all blog posts
  const allTags = useMemo(() => {
    return Array.from(
      new Set(
        blogs.flatMap((blog) => blog.tags ?? [])
      )
    ).sort((a, b) => a.localeCompare(b));
  }, [blogs]);

  // Filter + Sort
  const filteredBlogs = useMemo(() => {
    let results = [...blogs];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      results = results.filter((blog) => {
        return (
          blog.title.toLowerCase().includes(query) ||
          blog.excerpt.toLowerCase().includes(query) ||
          blog.author.toLowerCase().includes(query) ||
          (blog.tags ?? []).some((tag) =>
            tag.toLowerCase().includes(query)
          )
        );
      });
    }

    // Tags
    if (selectedTags.length > 0) {
  results = results.filter((blog) =>
    blog.tags.some((tag) =>
      selectedTags.includes(tag)
    )
  );
}

    // Sort
    switch (sortBy) {
      case "newest":
        results.sort(
          (a, b) =>
            new Date(b.date).getTime() -
            new Date(a.date).getTime()
        );
        break;

      case "oldest":
        results.sort(
          (a, b) =>
            new Date(a.date).getTime() -
            new Date(b.date).getTime()
        );
        break;

      case "az":
        results.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "za":
        results.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
    }

    return results;
  }, [blogs, search, selectedTags, sortBy]);

  function toggleTag(tag: string) {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  }

  function clearFilters() {
    setSearch("");
    setSelectedTags([]);
    setSortBy("newest");
  }

  return (
    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
      {/* Sidebar on desktop */}
      <aside className="lg:w-72 shrink-0">
        <div className="lg:sticky lg:top-32">
          <BlogFilters
            search={search}
            setSearch={setSearch}
            sortBy={sortBy}
            setSortBy={setSortBy}
            tags={allTags}
            selectedTags={selectedTags}
            toggleTag={toggleTag}
            clearFilters={clearFilters}
          />
        </div>
      </aside>

      {/* Blog Grid */}
      <main className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-700 font-medium">
            Showing{" "}
            <span className="font-bold">
              {filteredBlogs.length}
            </span>{" "}
            article{filteredBlogs.length !== 1 && "s"}
          </p>

          {(search ||
            selectedTags.length > 0 ||
            sortBy !== "newest") && (
            <button
              onClick={clearFilters}
              className="text-sm text-[#013161] hover:underline font-semibold"
            >
              Clear Filters
            </button>
          )}
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center shadow">
            <h2 className="text-2xl font-bold mb-2">
              No articles found
            </h2>

            <p className="text-gray-600 mb-6">
              Try adjusting your search or removing filters.
            </p>

            <button
              onClick={clearFilters}
              className="bg-[#013161] text-white px-5 py-3 rounded-lg hover:bg-[#02448a] transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                blog={blog}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}