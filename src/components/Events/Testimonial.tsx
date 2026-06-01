import Image from "next/image";

interface TestimonialProps {
  quote: string;
  author: string;
  image: string;
}

export function Testimonial({ quote, author, image }: TestimonialProps) {
  return (
    <div className="not-prose my-10 rounded-2xl bg-white p-6 shadow-md border border-[#013161]/10">
      <div className="flex flex-col md:flex-row gap-6 ">
        {/* IMAGE - 25% */}
        <div className="w-full md:w-1/4">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image src={image} alt={author} fill className="object-cover" />
          </div>
        </div>

        {/* CONTENT - 75% */}
        <div className="w-full md:w-3/4">
          <blockquote className="text-lg italic text-gray-700 leading-relaxed border-l-4 border-[#013161] pl-5">
            "{quote}"
          </blockquote>

          <div className="mt-4"></div>
        </div>
      </div>
    </div>
  );
}
