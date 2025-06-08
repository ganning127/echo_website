import Image from "next/image";
import { FadeInWhenVisible } from "../Animation/FadeInWhenVisible";

export const AboutSection = () => {
  return (
    <section className="flex flex-col gap-32">
      <FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-[36px]   mb-1">MISSION</h2>
              <p className="text-[24px]">
                We are committed to creating innovative approaches to protect
                the heart health of our communities.
              </p>
            </div>
            <div>
              <h2 className="text-[36px]  mb-1">VISION</h2>
              <p className="text-[24px]">
                We envision a future where young people and their families are
                empowered with the knowledge and tools needed to achieve
                lifelong heart health through education, research, and advocacy.
              </p>
            </div>
            <div>
              <h2 className="text-[36px]   mb-1">LEADERSHIP</h2>
              <p className="text-[24px]">
                The ECHO team is spread far and wide across the nation. The
                project is guided by a dedicated and diverse team of leaders
                passionate about science, technology, and art.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <Image
              src="/circle_logo.png"
              alt="ECHO Logo"
              width={160}
              height={160}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <h2 className="text-[#08204E] text-[48px]">MEET THE TEAM</h2>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {TEAM_MEMBERS.map((member, index) => {
            return <MemberCard key={index} member={member} />;
          })}
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <h2 className="text-[#08204E] text-[48px] text-center">
          FOUNDER&apos;S STORY
        </h2>
        <div>
          <FoundersStory />
        </div>
      </FadeInWhenVisible>
    </section>
  );
};

export const FoundersStory = () => {
  const events = [
    {
      year: "July 4, 2014",
      text: "July 2014 Dad receives life saving procedure after heart attack on a family vacation",
      img: "/timeline/dad_procedure.png",
    },
    {
      year: "July 10, 2015",
      text: "U.S. Naval Academy Medical Disqualification for High Blood Pressure",
      img: "/timeline/naval_disqual.png",
    },
    {
      year: "July 27, 2015",
      text: "Started UCLA career over summer, prior to Fall quarter",
      img: "/timeline/started_ucla.png",
    },
    {
      year: "May 16, 2017",
      text: "May Met Dr. Marcella Press in the catheterization lab at UCLA hospital",
      img: "/timeline/met_dr.png",
    },
    {
      year: "July 25, 2017",
      text: "Co-founded the Early Cardiovascular Health Outreach SMS (ECHOS) alongside the UCLA Women's Cardiovascular Center ",
      img: "/echo_logo.png",
    },
    {
      year: "September 25, 2017",
      text: "First scientific research poster presentation at the UCLA Cardiovascular Symposium",
      img: "/timeline/first_poster.png",
    },
    {
      year: "September 25, 2017",
      text: "Awarded the UCLA Babara Streisand Research Fellowship",
      img: "/timeline/babara_streisand.png",
    },
    {
      year: "December 19, 2018",
      text: "Selected for the 2019 Undergraduate Research Fellows Program (URFP) and scholarship from the Wasserman Endowment",
      img: "/timeline/urfp.png",
    },
    {
      year: "May 21, 2019",
      text: "UCLA Undergraduate Research Poster Day",
      img: "/timeline/poster_day.png",
    },
    {
      year: "May 15, 2021",
      text: "Abstract accepted to American College of Cardiology",
    },
    {
      year: "July 13, 2021",
      text: "Published first manuscript of ECHOS research findings",
    },
    {
      year: "August 12, 2022",
      text: "Defended Master's Thesis on ECHOS",
      img: "/timeline/def_masters.png",
    },
    {
      year: "November, 2022",
      text: "$10,000 Ambition Accelerator Winner at First Pitch Competition at Taco Bell Foundation in Irvine, Ca.",
      img: "/timeline/tbf_pitch.png",
    },
    {
      year: "February 2023",
      text: "Received the Hershey Company Heartwarming Young Hero's Grant",
      img: "/timeline/hershey.png",
    },
    {
      year: "April 29, 2023",
      text: "Shared the meaning behind a healthy heart for Global Youth Service Day",
    },
    {
      year: "October 5, 2023",
      text: "Finalist at Pitch Competition of the UCLA Health Innovation Challenge Health Equity Track",
    },
    {
      year: "2025",
      text: "Earned a Master's in Public Health ",
      img: "/timeline/masters_ph.png",
    },
  ];

  return (
    <section className=" md:px-20 font-body">
      <p className="text-center max-w-4xl mx-auto text-base text-gray-700 mb-16">
        Kimberly&apos;s connection to heart health awareness is deeply personal.
        Since high school, she dreamt of attending the U.S. Naval Academy, but
        her early hypertension diagnosis disqualified her from attending.
        Although she felt sad, she turned her disappointment into determination:
        hypertension ran in her family, and she understood the urgency of
        education for protection from heart disease. Little did she know that
        this would inspire the next 10 years of her career.
      </p>

      <ol className="relative border-s border-[#00488D]">
        {events.reverse().map((event, index) => (
          <li key={index} className={`mb-10 ms-4`}>
            <div className="absolute w-3 h-3 bg-[#00488D] rounded-full mt-1.5 -start-1.5"></div>
            <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              <p className="font-bold">{event.year}</p>
            </time>

            {event.img && (
              <Image
                src={event.img}
                alt={`${event.year} image`}
                width={200}
                height={100}
                className="h-auto w-64 object-cover rounded-lg my-2"
              />
            )}

            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {event.text.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};

const MemberCard = ({
  member,
}: {
  member: {
    name: string;
    role: string;
    image: string;
    icon: string;
  };
}) => {
  const iconSize = 50;
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="relative">
        <Image
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          className="h-24 w-24 object-cover rounded-lg"
        />
        {/* <Image
          src={member.icon}
          alt={`${member.name} icon`}
          width={iconSize}
          height={iconSize}
          className="-right-10 -bottom-6 absolute"
        /> */}
      </div>
      <div className="text-left">
        <div className="flex flex-row items-center gap-2">
          <Image
            src={member.icon}
            alt={`${member.name} icon`}
            width={iconSize}
            height={iconSize}
            className=""
          />
          <h3 className="text-[36px]">{member.name}</h3>
        </div>
        <p className="text-[20px] text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

const TEAM_MEMBERS = [
  {
    name: "Kimberly Uehisa",
    role: "Founder / President",
    image: "/people/kim.jpg",
    icon: "/people/icons/kim.png",
  },
  {
    name: "Fabian Bautista",
    role: "Illustrator / Animator",
    image: "/people/fabian.jpg",
    icon: "/people/icons/fabian.png",
  },
  {
    name: "Emilia Hernandez",
    role: "Web Designer",
    image: "/people/emilia.jpg",
    icon: "/people/icons/emilia.png",
  },
  {
    name: "Lily Nguyen",
    role: "Designer",
    image: "/people/lily.jpg",
    icon: "/people/icons/lily.png",
  },
  {
    name: "Ronit Ben-Joseph",
    role: "Narrative Designer / Writer",
    image: "/people/ronit.jpg",
    icon: "/people/icons/ronit.png",
  },
  {
    name: "Ganning Xu",
    role: "Web Programmer",
    image: "/people/ganning.jpg",
    icon: "/people/icons/ganning.png",
  },
  {
    name: "Bella Rose Kelly",
    role: "Music Composer",
    image: "/people/bella.jpg",
    icon: "/people/icons/bella.png",
  },
  {
    name: "Zachary Kaye",
    role: "Sound Producer",
    image: "/people/zachary.jpg",
    icon: "/people/icons/zachary.png",
  },
  {
    name: "Brian Dote",
    role: "Board Member",
    image: "/people/brian.jpg",
    icon: "/people/icons/brian.png",
  },
  {
    name: "Ben Conard",
    role: "Board Member",
    image: "/people/ben.jpg",
    icon: "/people/icons/ben.png",
  },
];
