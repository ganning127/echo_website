export function ScheduleSection() {
  return (
    <div className="bg-[#FACA1E] w-full shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap">
        {/* Schedule */}
        <div className="flex-1 min-w-[260px] flex items-center gap-6 px-10 py-5 border-b-4 border-r-0 sm:border-b-0 sm:border-r-4 border-[#F89202]">
          <span
            className="text-[#013161] whitespace-nowrap shrink-0"
            style={{
              fontSize: "2rem",
            }}
          >
            Schedule
          </span>
          <span
            className="text-black"
            style={{ fontSize: "1.25rem" }}
          >
            10 sessions, each 1 hour
          </span>
        </div>

        {/* Grade Level */}
        <div className="flex-1 min-w-[260px] flex items-center gap-6 px-10 py-5">
          <span
            className="text-[#013161] whitespace-nowrap shrink-0"
            style={{
              fontSize: "2rem",
            }}
          >
            Grade Level
          </span>
          <span
            className="text-black"
            style={{ fontSize: "1.25rem" }}
          >
            Elementary
          </span>
        </div>
      </div>
    </div>
  );
}
