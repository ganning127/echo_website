import Image from "next/image";
import Link from "next/link";

export function PlacematBlogCallout() {
  return (
    <section className="max-w-5/6 mx-auto py-16">
                      <h1 className="text-5xl mb-5">Read Our Blog</h1>

<Link href="/blog/echo-and-friends-picnic-placemat" className="group block">
      <div
        className="
          flex flex-col md:flex-row
          bg-white border border-gray-200 rounded-2xl
          overflow-hidden
          shadow-sm
          transition-all duration-300 ease-out
          group-hover:shadow-xl
          group-hover:-translate-y-1
          group-hover:border-gray-300
           mx-auto
        "
      >

        {/* IMAGE */}
        <div
          className="
            relative
            w-full md:w-80
            h-90 md:h-auto
            shrink-0
            overflow-hidden
          "
        >
          <Image src="/Blog_thumbnails/Echo_and_friends_placemats.png"
            alt="Echo and Friends Placemats"
            width={320}
            height={360}
            className="
              absolute inset-0
              w-full h-full
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-between p-6 md:p-8 min-w-0 flex-1">

          <div>

           
<div className="text-[#013161] text-center sm:text-left font-heading mb-4"
              >
                <p className="text-xs font-bold
                text-gray-800
                transition-colors duration-200 uppercase tracking-[0.2em]"> BLOG</p>
              </div>
            {/* TITLE */}
            <h3
              className="
                text-2xl md:text-3xl
                font-extrabold
                uppercase
                tracking-wide
                text-gray-900
                transition-colors duration-200
                group-hover:text-[#1876d0]
                line-clamp-2 text-left
              "
            >
              Echo and Friends Picnic Placemat Brings Fun and Learning to Hawai’i Food Bank Summer Meal Program
            </h3>

            {/* EXCERPT */}
            <p
              className="
                text-base text-gray-600
                mt-4
                leading-relaxed
                line-clamp-3 text-left
              "
            >
              Supporting Hawaiʻi's children through creativity and community for summer meals!
            </p>
          </div>

          {/* READ MORE */}
          <div className="mt-6 flex items-center gap-2">
            <span
              className="
                text-xs font-bold uppercase tracking-[0.2em]
                text-gray-800
                transition-colors duration-200
                group-hover:text-[#1876d0]
              "
            >
              Read More
            </span>

            <span
              className="
                transition-transform duration-300
                group-hover:translate-x-1
                text-[#7C2D36]
              "
            >
              →
            </span>
          </div>

        </div>
      </div>
    </Link>
    </section>
  );
}