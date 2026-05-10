import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export const NavLinkBox = ({
  title,
  href,
  isLeft,
  isRight,
  darker = false,
}: {
  title: string;
  href: string;
  isLeft: boolean;
  isRight: boolean;
  darker?: boolean;
}) => {
  let roundedClass = "";
  if (isRight) roundedClass = "rounded-r-lg border-l-2";
  else if (isLeft) roundedClass = "rounded-l-lg";
  else roundedClass = "border-l-2";

  const isExternalLink = href.startsWith("http://") || href.startsWith("https://");

  return (
    <Link href={href} target={isExternalLink ? "_blank" : "_self"}>
      <div
        className={cn(
          "border-[#0F4C75] p-4 text-white px-6",
          roundedClass,
          darker
            ? "bg-[#013161] hover:bg-[#011a33]"
            : "bg-[#1876D0] hover:bg-[#013161]",
        )}
      >
        <h2 className="text-xl">{title}</h2>
      </div>
    </Link>
  );
};

export const DropdownNavBox = ({
  title,
  href,
  children,
  isLeft,
  isRight,
}: {
  title: string;
  href: string | null;
  children: { title: string; href: string }[];
  isLeft: boolean;
  isRight: boolean;
}) => {
  let roundedClass = "";
  if (isRight) roundedClass = "rounded-r-lg border-l-2";
  else if (isLeft) roundedClass = "rounded-l-lg";
  else roundedClass = "border-l-2";

  const triggerClass = cn(
    "border-[#0F4C75] p-4 text-white px-6 flex items-center gap-1 cursor-pointer",
    roundedClass,
    "bg-[#1876D0] hover:bg-[#013161]",
  );

  const triggerContent = (
    <>
      <h2 className="text-xl">{title}</h2>
      <ChevronDown className="w-4 h-4 mt-0.5 transition-transform group-hover:rotate-180" />
    </>
  );

  return (
    <div className="relative group">
      {/* If href exists, the trigger navigates on click */}
      {href ? (
        <Link href={href} className={triggerClass}>
          {triggerContent}
        </Link>
      ) : (
        <div className={triggerClass}>
          {triggerContent}
        </div>
      )}

      {/* Dropdown panel */}
      <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-[#013161] border border-[#0F4C75] rounded-b-lg overflow-hidden min-w-full shadow-lg z-50">
        {children.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className="text-white px-6 py-3 hover:bg-[#1876D0] whitespace-nowrap text-lg font-heading transition-colors"
          >
            {child.title}
          </Link>
        ))}
      </div>
    </div>
  );
};