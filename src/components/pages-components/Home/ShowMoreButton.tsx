"use client";
import { useState } from "react";

export function ShowMoreButton({ text }: { text: string }) {
  const [showMore, setShowMore] = useState(false);

  if (text.length <= 150) {
    return <p className="text-sm leading-base text-gray-300">{text}</p>;
  }

  return (
    <p className="text-sm leading-base text-gray-300">
      {showMore ? text : `${text.substring(0, 150)}...`}
      <button
        onClick={() => setShowMore(!showMore)}
        className="ml-1 text-sm font-bold leading-base text-purple-100"
      >
        {showMore ? "ver menos" : "ver mais"}
      </button>
    </p>
  );
}
