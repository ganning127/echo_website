import Image from "next/image";

export function GallerySection() {
  return (
    <div className="w-full overflow-hidden py-10">
      {/* Desktop: wide collage photo */}
      <Image
                src="/Echo Explorers and characters.png"
                alt="Explorer Character"
                width={540}
                height={565}
                className="md:block hidden m-auto pb-5 w-full  xl:max-w-6xl"
              />
      {/* Mobile: union grid photo */}
      <Image
                src="/Echo Explorers in the Classroom.png"
                alt="Explorer Character"
                width={540}
                height={565}
                className="block md:hidden m-auto pb-5 w-full "
              />
    </div>
  );
}
