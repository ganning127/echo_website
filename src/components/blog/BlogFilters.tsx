"use client";

type SortOption = "newest" | "oldest" | "az" | "za";

interface BlogFiltersProps {
  search: string;
  setSearch: (value: string) => void;

  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;

  tags: string[];
  selectedTags: string[];

  toggleTag: (tag: string) => void;
  clearFilters: () => void;
}

export default function BlogFilters({
  search,
  setSearch,
  sortBy,
  setSortBy,
  tags,
  selectedTags,
  toggleTag,
  clearFilters,
}: BlogFiltersProps) {
  const hasFilters =
    search.length > 0 ||
    selectedTags.length > 0 ||
    sortBy !== "newest";

  return (
    <>
      {/* ==========================
          MOBILE / TABLET FILTER BAR
      =========================== */}
      <div className="lg:hidden bg-white rounded-xl shadow-md p-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#013161]"
        />

        <div className="flex gap-3 mt-4">
          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as SortOption)
            }
            className="flex-1 rounded-lg border border-gray-300 px-3 py-2"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="az">Title A–Z</option>
            <option value="za">Title Z–A</option>
          </select>

          {/* Tags */}
          <details className="flex-1 rounded-lg border border-gray-300 bg-white">
            <summary className="cursor-pointer px-4 py-2 font-medium">
              Tags
            </summary>

            <div className="border-t p-3 max-h-64 overflow-y-auto">
              {tags.map((tag) => (
                <label
                  key={tag}
                  className="flex items-center gap-2 py-1 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                  />

                  <span>{tag}</span>
                </label>
              ))}
            </div>
          </details>
        </div>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="mt-4 w-full rounded-lg bg-[#013161] text-white py-2 font-semibold hover:bg-[#02448a] transition"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* ==========================
            DESKTOP SIDEBAR
      =========================== */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">
          Filters
        </h2>

        {/* Search */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-2">
            Search
          </label>

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#013161]"
          />
        </div>

        {/* Sort */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-2">
            Sort By
          </label>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as SortOption)
            }
            className="w-full rounded-lg border border-gray-300 px-4 py-2"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="az">Title A–Z</option>
            <option value="za">Title Z–A</option>
          </select>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-semibold mb-3">
            Tags
          </label>

          <div className="max-h-72 overflow-y-auto space-y-2 border rounded-lg p-3">
            {tags.length === 0 ? (
              <p className="text-sm text-gray-500">
                No tags available.
              </p>
            ) : (
              tags.map((tag) => (
                <label
                  key={tag}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                    className="h-4 w-4"
                  />

                  <span>{tag}</span>
                </label>
              ))
            )}
          </div>
        </div>

        {hasFilters && (
          <button
            onClick={clearFilters}
            className="mt-8 w-full rounded-lg bg-[#013161] text-white py-3 font-semibold hover:bg-[#02448a] transition"
          >
            Clear Filters
          </button>
        )}
      </div>
    </>
  );
}