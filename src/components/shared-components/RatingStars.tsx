"use client";

import { useState } from "react";

import { Star } from "./icons";

interface RatingStarsProps {
  rating: number;
  size?: "sm" | "lg";
  setRating?: (rating: number) => void;
}

export function RatingStars({
  rating,
  setRating,
  size = "sm",
}: RatingStarsProps) {
  const STAR_SIZES = {
    sm: "h-4 w-4",
    lg: "h-7 w-7",
  };

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
          className={`
          fill-current stroke-purple-100
          ${STAR_SIZES[size]}
          ${isEditable ? "cursor-pointer transition-colors" : ""}
          ${index + 1 <= ratingValue ? "text-purple-100" : "text-gray-700"}
             `}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          onClick={handleSetValue}
        />
      ))}
    </div>
  );
}
