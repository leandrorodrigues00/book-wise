import { RatingWithAuthorConfig } from "@/types";
import { dayjs } from "@/lib/dayjs";
import { RatingStars } from "@/components/rating-stars";
import { UserAvatar } from "@/components/user-avatar";

interface UserRatingCardProps {
  rating: RatingWithAuthorConfig;
}

export function UserRatingCard({ rating }: UserRatingCardProps) {
  return (
    <div className="rounded-lg bg-gray-700 p-6">
      <header className="mb-5 flex justify-between">
        <div className="flex items-center gap-4">
          <UserAvatar
            user={{
              name: rating.user.name,
              image: rating.user.image,
              id: rating.user.id,
            }}
          />

          <div>
            <p className="leading-base">{rating.user.name}</p>
            <span className="text-sm text-gray-400">
              {dayjs(rating.created_at).fromNow()}
            </span>
          </div>
        </div>

        <RatingStars rating={rating.rate} />
      </header>

      <p className="text-sm leading-base text-gray-300">{rating.description}</p>
    </div>
  );
}
