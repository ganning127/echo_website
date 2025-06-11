"use client";

import { useState, useMemo } from "react";
import featuredActivities from "@/lib/activities.json";
import { ActivityCard } from "../Cards/ActivityCard";
import { ChevronDown } from "lucide-react";

const CARDS_PER_PAGE = 12;

export const AllActivities = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    featuredActivities.forEach((activity) => {
      activity.tags?.forEach((tag) => {
        if (tag && tag.trim()) tagSet.add(tag.trim());
      });
    });
    return Array.from(tagSet).sort();
  }, []);

  const filteredActivities = useMemo(() => {
    if (selectedTags.length === 0) return featuredActivities;
    return featuredActivities.filter((activity) =>
      activity.tags?.some((tag) => selectedTags.includes(tag))
    );
  }, [selectedTags]);

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

  return (
    <div className="p-4">
      <div className="relative inline-block mb-6">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="font-heading flex items-center px-4 py-2 bg-[#00A6C5] text-white rounded hover:bg-[#0085a2]"
        >
          Filter
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded shadow-lg p-4 max-h-64 overflow-y-auto w-64">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentActivities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 font-heading bg-[#00A6C5] rounded hover:bg-[#013161] hover:text-white disabled:opacity-50"
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
            className="px-4 py-2 font-heading bg-[#00A6C5] rounded hover:bg-[#013161] hover:text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
