// src/components/blog/ResponsiveImage.tsx

import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  mobileSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export function ResponsiveImage({
  src,
  mobileSrc,
  alt,
  width = 1600,
  height = 900,
  caption,
}: ResponsiveImageProps) {
  return (
    <figure className="my-8">
      <picture>
        {mobileSrc && (
          <source
            media="(max-width:768px)"
            srcSet={mobileSrc}
          />
        )}

        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-xl"
        />
      </picture>

      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}