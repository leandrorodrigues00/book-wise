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
    <div className="relative flex w-full gap-5 rounded-lg border border-gray-700 bg-gray-700 px-5 py-[1.125rem] transition hover:cursor-pointer hover:border-gray-600">
      {book.alreadyRead && (
        <p className="absolute right-0 top-0 block rounded-bl-[4px] rounded-tr-[4px] bg-green-300 px-3 py-1 text-xs font-bold leading-shorter text-green-100">
          LIDO
        </p>
      )}

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
