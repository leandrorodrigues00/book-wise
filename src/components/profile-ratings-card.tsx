import Image from "next/image";
import Link from "next/link";

import { ProfileRatingConfig } from "@/types";
import { dayjs } from "@/lib/dayjs";
import { RatingStars } from "@/components/rating-stars";

interface ProfileRatingsCardProps {
  rating: ProfileRatingConfig;
}

export default function ProfileRatingsCard({
  rating,
}: ProfileRatingsCardProps) {
  return (
    <div className="mb-6">
      <span className="text-sm leading-base text-gray-300">
        {dayjs(rating.created_at).fromNow()}
      </span>

      <div className="mt-2 rounded-lg bg-gray-700 p-6">
        <header className="flex gap-5">
          <Link
            href={`http://localhost:3000/explore/book/${rating.book.id}`}
            prefetch={false}
          >
            <Image
              src={rating.book.cover_url}
              width={98}
              height={134}
              alt={`Cover of the book ${rating.book.name}`}
            />
          </Link>
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-bold leading-short">{rating.book.name}</h2>
              <p className="text-sm leading-base text-gray-400">
                {rating.book.author}
              </p>
            </div>
            <RatingStars rating={rating.rate} />
          </div>
        </header>
        <p className="mt-6 text-sm leading-base text-gray-300">
          {rating.description}
        </p>
      </div>
    </div>
  );
}
