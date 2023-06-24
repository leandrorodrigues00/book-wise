import Image from "next/image";
import Link from "next/link";

import { dayjs } from "@/lib/dayjs";
import { getLatestUserRating } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { ChevronRight } from "@/components/icons";
import { RatingStars } from "@/components/rating-stars";

export async function UserLastReadCard() {
  const user = await getCurrentUser();
  if (!user) return null;

  const rating = await getLatestUserRating(user.id);
  if (!rating) return null;

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <p className="text-sm leading-base text-gray-100">
          Your latest reading
        </p>

        <Link
          className="flex items-center gap-2 rounded px-2 py-1 text-sm font-bold leading-base text-purple-100 transition hover:bg-[#151822]"
          href={`/profile/${rating.userId}`}
        >
          View all
          <ChevronRight className="h-4 w-4 fill-current text-purple-100" />
        </Link>
      </div>

      <div className="mt-5 flex gap-5 rounded-lg bg-gray-600 px-6 py-5">
        <Link href={`explore/book/${rating.book.id}`} prefetch={false}>
          <Image
            className="h-full max-h-[152px] min-w-[108px]"
            src={rating.book.cover_url}
            width={108}
            height={152}
            alt={`Cover photo of the book: ${rating.book.name}`}
          />
        </Link>

        <div className="w-full">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-gray-400">
              {dayjs(rating.created_at).fromNow()}
            </span>
            <RatingStars rating={rating.rate} />
          </div>

          <div className="mb-6">
            <h2 className="font-bold leading-short">{rating.book.name}</h2>
            <span className="text-sm leading-base text-gray-400">
              {rating.book.author}
            </span>
          </div>

          <p className="line-clamp-2   text-sm leading-base">
            {rating.description}
          </p>
        </div>
      </div>
    </div>
  );
}
