export const NAV_CONTENT = [
  { title: "About", 
    href: "/about",
    children: [
      {title: "Mission", href:"/about?tab=mission"},
      
      {title: "Newsletter", href:"/about?tab=newsletter"},
    ]
   },
  {
    title: "Characters",
    href: "/characters",
    footerHref: "/characters",      // single link in footer
    children: [
      { title: "Echo", href: "/characters/echo" },
      { title: "Artie", href: "/characters/artie" },
      { title: "Vienna", href: "/characters/vienna" },
      { title: "Plaqtrick", href: "/characters/plaqtrick" },
    ],
  },
  {
    title: "Programs",
    href: null,
    // no footerHref — children will expand in footer
    children: [
      { title: "Echo Explorers", href: "/program/echo-explorers" },
      { title: "Echo Heroes", href: "/program/echo-heroes" },
    ],
  },
  { title: "Activities", href: "/activities" },
];