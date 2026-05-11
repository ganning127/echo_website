import Image from "next/image";

export function GallerySection() {
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop: wide collage photo */}
      <Image
                src="/echo explorers.webp"
                alt="Explorer Character"
                width={540}
                height={565}
                className="md:block hidden m-auto pb-5 w-full max-w-[350px] lg:max-w-[420px] xl:max-w-6xl"
              />
      {/* Mobile: union grid photo */}
      <Image
                src="/echo teachers note.webp"
                alt="Explorer Character"
                width={540}
                height={565}
                className="block md:hidden m-auto pb-5 w-full max-w-[350px] lg:max-w-[420px] xl:max-w-[480px]"
              />
    </div>
  );
}
