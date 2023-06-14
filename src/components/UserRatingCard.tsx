import { getRelativeTimeString } from "@/utils/getRelativeTimeString";

import { RatingWithAuthorConfig } from "@/types";
import { Avatar } from "@/components/ui/Avatar";
import { RatingStars } from "@/components/RatingStars";

interface UserRatingCardProps {
  rating: RatingWithAuthorConfig;
}

export function UserRatingCard({ rating }: UserRatingCardProps) {
  const timeString = getRelativeTimeString(
    new Date(rating.created_at),
    "en-US"
  );

  return (
    <div className="rounded-lg bg-gray-700 p-6">
      <header className="mb-5 flex justify-between">
        <div className="flex items-center gap-4">
          <Avatar
            src={rating.user.image!}
            alt={`Profile photo of ${rating.user.name}`}
          />

          <div>
            <p className="leading-base">{rating.user.name}</p>
            <span className="text-sm text-gray-400">{timeString}</span>
          </div>
        </div>

        <RatingStars rating={rating.rate} />
      </header>

      <p className="text-sm leading-base text-gray-300">{rating.description}</p>
    </div>
  );
}
