import Image from "next/image";

interface QuoteWithIconProps {
  quote: string;
  speaker: string;
  icon?: string;
}

export default function QuoteWithIcon({
  quote,
  speaker,
  icon,
}: QuoteWithIconProps) {
  return (
    <blockquote className=" border-l-4 border-[#013161] pl-6">
      <p className="text-2xl italic leading-relaxed text-[#002E42]">
        {quote}
      </p>

      <footer className="flex items-center gap-3">
        <span className="font-semibold text-[#002E42]">
          — {speaker}
        </span>
         {icon && (
          <Image
            src={icon}
            alt=""
            width={25}
            height={25}
            className="h-[25px] w-[25px] object-contain mt-0 mb-0"
          />
        )}
      </footer>
    </blockquote>
  );
}