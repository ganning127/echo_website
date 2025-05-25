import Image from "next/image";
import { cn } from "@/lib/utils";

export const NavBar = () => {
  return (
    <nav className="">
      <div className="flex w-full justify-center items-center">
        <Image
          src="/navbar_logo.png"
          width={200}
          height={10}
          alt="EdEcho logo"
        />
        {NAV_CONTENT.map((item, index) => {
          const isLeft = index === 0;
          const isRight = index === NAV_CONTENT.length - 1;

          return (
            <NavLinkBox
              key={item.href}
              title={item.title}
              href={item.href}
              darker={item.darker}
              isLeft={isLeft}
              isRight={isRight}
            />
          );
        })}
      </div>
    </nav>
  );
};

const NAV_CONTENT = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Characters",
    href: "/characters",
  },
  {
    title: "Activities",
    href: "/activities",
  },
  {
    title: "Outreach",
    href: "/outreach",
  },
  {
    title: "Music",
    href: "/music",
  },
  {
    title: "Play",
    href: "/play",
    darker: true,
  },
];

const NavLinkBox = ({
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
  if (isRight) {
    roundedClass = "rounded-r-lg border-l-2";
  } else if (isLeft) {
    roundedClass = "rounded-l-lg";
  } else {
    roundedClass = "border-l-2";
  }

  return (
    <a href={href}>
      <div
        className={cn(
          "border-[#0F4C75] p-4 text-white px-6",
          roundedClass,
          darker
            ? "bg-[#013161] hover:bg-[#011a33]"
            : "bg-[#1876D0] hover:bg-[#013161]"
        )}
      >
        <h2 className="text-xl">{title}</h2>
      </div>
    </a>
  );
};
