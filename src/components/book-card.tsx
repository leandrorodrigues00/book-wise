import Image from "next/image";
import { BookWithRatingConfig } from "@/types";

import { RatingStars } from "@/components/rating-stars";

interface BookCardProps {
  size?: "base" | "lg";
  book: BookWithRatingConfig;
}

export function BookCard({ size = "base", book }: BookCardProps) {
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
    <div className="flex w-full gap-5 rounded-lg bg-gray-700 px-5 py-[1.125rem] hover:cursor-pointer">
      <Image
        src={book.cover_url}
        className="rounded object-cover"
        width={IMAGE_SIZES[size].width}
        height={IMAGE_SIZES[size].height}
        alt={`Capa do livro ${book.name}`}
      />

      <div className="flex flex-col justify-between text-left">
        <div>
          <h2 className="line-clamp-2 font-bold leading-short">{book.name}</h2>
          <p className="text-sm leading-base text-gray-400">{book.author}</p>
        </div>

        <RatingStars rating={book.avgRating} />
      </div>
    </div>
  );
}
