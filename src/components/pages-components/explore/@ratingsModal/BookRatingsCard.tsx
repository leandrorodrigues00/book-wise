"use client";
import { useState } from "react";

import { RatingForm } from "./RatingForm";
import { RatingWithAuthor, UserRatingCard } from "./UserRatingCard";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function BookRatingsCard({
  bookRatings,
}: {
  bookRatings: Array<RatingWithAuthor>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated" && session !== null;

  return (
    <div>
      <header className="mb-4 flex justify-between">
        <span className="text-sm leading-base">Avaliações</span>
        {isAuthenticated ? (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded px-3 py-1 font-bold leading-base text-purple-100 hover:bg-[#151822] hover:transition-colors ${
              isOpen && "invisible"
            }`}
          >
            Avaliar
          </button>
        ) : (
          <Link
            className="rounded px-3 py-1 font-bold leading-base text-purple-100 hover:bg-[#151822] hover:transition-colors"
            href="explore/login"
          >
            Avaliar
          </Link>
        )}
      </header>

      <div className="flex flex-col space-y-3 pb-10">
        {isOpen && isAuthenticated && (
          <RatingForm setIsOpen={setIsOpen} session={session} />
        )}

        {bookRatings.map((rating) => (
          <UserRatingCard rating={rating} key={rating.id} />
        ))}
      </div>
    </div>
  );
}
