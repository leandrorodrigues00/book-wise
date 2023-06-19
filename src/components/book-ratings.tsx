import Image from "next/image";
import Link from "next/link";

import { RatingConfig } from "@/types";
import { RatingStars } from "@/components/rating-stars";
import { ShowMoreButton } from "@/components/show-more-button";
import { UserAvatar } from "@/components/user-avatar";

interface BookRatingsProps {
  ratings: RatingConfig;
}

export function BookRatings({ ratings }: BookRatingsProps) {
  return (
    <div className="w-full rounded-lg bg-gray-700 p-6">
      <header className="flex justify-between">
        <div className="flex items-center gap-4">
          <UserAvatar
            user={{
              name: ratings.user.name,
              image: ratings.user.image,
              id: ratings.user.id,
            }}
          />

          <div>
            <p className="leading-base">{ratings.user.name}</p>
            <span className="text-sm text-gray-400">Hoje</span>
          </div>
        </div>

        <RatingStars rating={ratings.rate} />
      </header>

      <div className="mt-8 flex gap-5">
        <Link href={`http://localhost:3000/explore/book/${ratings.book_id}`}>
          <Image
            className="h-full max-h-[152px] min-w-[108px]"
            src={ratings.book.cover_url}
            width={108}
            height={152}
            alt={`Cover photo of the book: ${ratings.book.name}`}
          />
        </Link>

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
