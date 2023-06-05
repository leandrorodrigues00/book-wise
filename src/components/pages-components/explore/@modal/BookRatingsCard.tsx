"use client";
import { useState } from "react";
import { RatingForm } from "./RatingForm";
import { RatingWithAuthor, UserRatingCard } from "./UserRatingCard";

export function BookRatingsCard({
  bookRatings,
}: {
  bookRatings: Array<RatingWithAuthor>;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="mb-4 flex justify-between">
        <span className="text-sm leading-base">Avaliações</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded px-3 py-1 font-bold leading-base text-purple-100 hover:bg-[#151822] hover:transition-colors ${
            isOpen && "invisible"
          }`}
        >
          Avaliar
        </button>
      </header>

      {/* Books Ratings */}
      <div className="flex flex-col space-y-3 pb-10">
        {isOpen && <RatingForm setIsOpen={setIsOpen} />}

        {bookRatings.map((rating) => (
          <UserRatingCard rating={rating} key={rating.id} />
        ))}
      </div>
    </div>
  );
}
