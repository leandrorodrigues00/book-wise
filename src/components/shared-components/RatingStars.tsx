import { Star } from "./icons";

interface RatingStarsProps {
  rating: number;
  size?: "sm" | "lg";
}

export function RatingStars({ rating, size = "sm" }: RatingStarsProps) {
  const STAR_SIZES = {
    sm: "h-4 w-4",
    lg: "h-7 w-7",
  };
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`star-${index}`}
          className={`${STAR_SIZES[size]} fill-current stroke-purple-100 ${
            index + 1 <= rating ? "text-purple-100" : "text-gray-700"
          }
             `}
        />
      ))}
    </div>
  );
}
