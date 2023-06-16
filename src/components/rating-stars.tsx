"use client";

import { useState } from "react";

import { cn } from "@/utils/tailwind-classnames";
import { Star } from "@/components/icons";

interface RatingStarsProps {
  rating: number;
  className?: string | undefined;
  setRating?: (rating: number) => void;
}

export function RatingStars({
  rating,
  setRating,
  className,
}: RatingStarsProps) {
  const [previewValue, setPreviewValue] = useState(0);
  const isEditable = !!setRating;

  const ratingValue = isEditable ? previewValue : rating;

  const handleMouseEnter = (value: number) => {
    if (isEditable) setPreviewValue(value);
  };

  const handleMouseLeave = () => {
    if (isEditable) setPreviewValue(rating);
  };

  const handleSetValue = () => {
    if (isEditable) setRating(ratingValue);
  };
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={`star-${index}`}
          className={cn(
            "h-4 w-4 fill-current stroke-purple-100",
            className,
            isEditable && "cursor-pointer transition-colors",
            index + 1 <= ratingValue ? "text-purple-100" : "text-gray-700"
          )}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={handleSetValue}
        />
      ))}
    </div>
  );
}
