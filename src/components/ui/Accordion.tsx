"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function Accordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full mx-auto space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-200 border border-gray-300 rounded-xl overflow-hidden bg-white shadow-sm"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <div className="flex items-center gap-3">
              {/* Yellow Heart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#FFD87A"
              >
                <path d="M12 21s-6.7-4.3-10-9c-1.7-2.4-1-5.9 1.5-7.7 2.2-1.5 5.2-.9 6.9 1C12.3 3.4 15.3 2.8 17.5 4.3c2.5 1.8 3.2 5.3 1.5 7.7-3.3 4.7-10 9-10 9z" />
              </svg>

              <span className="text-lg font-semibold">{item.question}</span>
            </div>

            <ChevronDown
              className={`transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === index ? "max-h-[500px] p-5 pt-0" : "max-h-0 p-0"
            }`}
          >
            <div className="text-gray-700 leading-relaxed">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
