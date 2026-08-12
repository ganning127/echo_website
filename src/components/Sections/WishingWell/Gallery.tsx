import Image from "next/image";

export function GallerySection() {
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop: wide collage photo */}
      <Image
                src="/programs/the-echo-wishing-well/Wishing-well-collage.png"
                alt="Explorer Character"
                width={1400}
                height={426}
                className="md:block hidden m-auto w-full"
              />
      {/* Mobile: union grid photo */}
      <Image
                src="/programs/the-echo-wishing-well/Wishing-well-collage.png"
                alt="Explorer Character"
                width={540}
                height={565}
                className="block md:hidden m-auto w-full"
              />
    </div>
  );
}
