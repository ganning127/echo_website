"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import featuredActivities from "@/lib/activities.json";
import { ActivityCard } from "../Cards/ActivityCard";
import { ChevronDown } from "lucide-react";

const CARDS_PER_PAGE = 12;

export const AllActivities = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const [sortOrder, setSortOrder] = useState<
    "asc" | "desc" | "order-asc" | "order-desc" | "none"
  >("none");

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    featuredActivities.forEach((activity) => {
      activity.tags?.forEach((tag) => {
        const trimmedTag = tag?.trim();
        if (trimmedTag && trimmedTag.toLowerCase() !== "home") {
          tagSet.add(trimmedTag);
        }
      });
    });
    return Array.from(tagSet).sort();
  }, []);

  const filteredActivities = useMemo(() => {
    let result = [...featuredActivities];

    if (selectedTags.length > 0) {
      result = result.filter((activity) =>
        activity.tags?.some((tag) => selectedTags.includes(tag))
      );
    }

    if (sortOrder === "asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "order-asc") {
      result.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    } else if (sortOrder === "order-desc") {
      result.sort((a, b) => (b.order ?? 0) - (a.order ?? 0));
    }

    return result;
  }, [selectedTags, sortOrder]);

  const totalPages = Math.ceil(filteredActivities.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const currentActivities = filteredActivities.slice(
    startIndex,
    startIndex + CARDS_PER_PAGE
  );

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const sortDropdownRef = useRef<HTMLDivElement | null>(null);
  const filterDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSortDropdownOpen(false);
      }
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-4">
      <div className="relative inline-block" ref={filterDropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="font-heading flex items-center px-4 py-2 bg-[#7C2D36] text-white rounded hover:bg-[#0085a2]"
        >
          Filter
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded shadow-lg p-4 overflow-y-auto w-40">
            {allTags.map((tag) => (
              <label key={tag} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagToggle(tag)}
                />
                <span>{tag}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="relative inline-block" ref={sortDropdownRef}>
        <button
          onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
          className="ml-3 font-heading flex items-center px-4 py-2 bg-[#7C2D36] text-white rounded hover:bg-[#0085a2]"
        >
          Sort
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>

        {isSortDropdownOpen && (
          <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded shadow-lg p-4 w-40">
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={sortOrder === "asc"}
                onChange={() =>
                  setSortOrder((prev) => (prev === "asc" ? "none" : "asc"))
                }
              />
              Alphabetical (A → Z)
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={sortOrder === "desc"}
                onChange={() =>
                  setSortOrder((prev) => (prev === "desc" ? "none" : "desc"))
                }
              />
              Alphabetical (Z → A)
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={sortOrder === "order-asc"}
                onChange={() =>
                  setSortOrder((prev) =>
                    prev === "order-asc" ? "none" : "order-asc"
                  )
                }
              />
              Oldest
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={sortOrder === "order-desc"}
                onChange={() =>
                  setSortOrder((prev) =>
                    prev === "order-desc" ? "none" : "order-desc"
                  )
                }
              />
              Newest
            </label>
          </div>
        )}
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentActivities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 font-heading bg-[#7C2D36] rounded hover:bg-[#013161] hover:text-white disabled:opacity-50"
          >
            Previous
          </button>
          <span className="font-heading text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 font-heading bg-[#7C2D36] rounded hover:bg-[#013161] hover:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
