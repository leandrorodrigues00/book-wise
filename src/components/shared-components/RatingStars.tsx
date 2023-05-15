import { Star } from "./icons";

interface RatingStarsProps {
  rating: number;
}

export function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`star-${index}`}
          className={`h-4 w-4 stroke-purple-100 fill-current ${
            index + 1 <= rating ? "text-purple-100" : "text-gray-700"
          }
             `}
        />
      ))}
    </div>
  );
}
