import { getRelativeTimeString } from "@/utils/getRelativeTimeString";

import { RatingWithAuthorConfig } from "@/types";
import { RatingStars } from "@/components/RatingStars";
import { UserAvatar } from "@/components/UserAvatar";

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
          <UserAvatar
            user={{
              name: rating.user.name,
              image: rating.user.image,
            }}
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
