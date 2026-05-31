export const EventInfoBox = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white border-l-4 border-[#013161] rounded-xl p-6 my-6 shadow-sm">
    <h3 className="text-lg font-bold text-[#013161] uppercase tracking-wide mb-2">
      {title}
    </h3>
    <div className="text-gray-700">{children}</div>
  </div>
);
