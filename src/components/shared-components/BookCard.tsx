import Image from "next/image";

import { RatingStars } from "./RatingStars";

interface BookCardProps {
  size?: "base" | "lg";
}

export function BookCard({ size = "base" }: BookCardProps) {
  const IMAGE_SIZES = {
    base: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 152,
    },
  };
  return (
    <div className="flex gap-5 bg-gray-700 py-[1.125rem] px-5 rounded-lg">
      <Image
        src="/images/books/Book.png"
        className="rounded"
        width={IMAGE_SIZES[size].width}
        height={IMAGE_SIZES[size].height}
        alt="Capa do livro revolução"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-bold leading-short">A revolução dos bichos</h2>
          <p className="text-sm text-gray-400 leading-base">George Orwell</p>
        </div>
        <RatingStars rating={4} />
      </div>
    </div>
  );
}
