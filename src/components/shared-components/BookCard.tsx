import Image from "next/image";

import { RatingStars } from "./RatingStars";
import { Book } from "../pages-components/Home/TrendingBooks";

export interface PopularBooks extends Book {
  avgRating: number;
}

interface BookCardProps {
  size?: "base" | "lg";
  book: PopularBooks;
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
    <div className="flex gap-5 rounded-lg bg-gray-700 px-5 py-[1.125rem]">
      <Image
        src={book.cover_url}
        className="rounded object-cover"
        width={IMAGE_SIZES[size].width}
        height={IMAGE_SIZES[size].height}
        alt="Capa do livro revolução"
      />

      <div className="flex flex-col justify-between">
        <div>
          <h2 className="line-clamp-2 font-bold leading-short">{book.name}</h2>
          <p className="text-sm leading-base text-gray-400">{book.author}</p>
        </div>
        <RatingStars rating={book.avgRating} />
      </div>
    </div>
  );
}
