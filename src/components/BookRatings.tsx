import Image from "next/image";

import { RatingConfig } from "@/types";
import { Avatar } from "@/components/ui/Avatar";
import { RatingStars } from "@/components/RatingStars";
import { ShowMoreButton } from "@/components/ShowMoreButton";

interface BookRatingsProps {
  ratings: RatingConfig;
}

export function BookRatings({ ratings }: BookRatingsProps) {
  return (
    <div className="w-full rounded-lg bg-gray-700 p-6">
      <header className="flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar
            src={ratings.user.image || ""}
            alt={`Profile photo of ${ratings.user.name}`}
          />

          <div>
            <p className="leading-base">{ratings.user.name}</p>
            <span className="text-sm text-gray-400">Hoje</span>
          </div>
        </div>

        <RatingStars rating={ratings.rate} />
      </header>

      <div className="mt-8 flex  gap-5">
        <Image
          className="h-full max-h-[152px]"
          src={ratings.book.cover_url}
          width={108}
          height={152}
          alt="Foto da capa do livro 'O Hobbit' de J.R.R TOLKIEN"
        />

        <div>
          <div className="mb-5">
            <h2 className="font-bold leading-short">{ratings.book.name}</h2>
            <span className="text-sm leading-base text-gray-400">
              {ratings.book.author}
            </span>
          </div>

          <ShowMoreButton text={ratings.description} />
        </div>
      </div>
    </div>
  );
}