"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { RatingWithAuthorConfig } from "@/types";
import { cn } from "@/utils/tailwind-classnames";
import { RatingForm } from "@/components/rating-form";
import { UserRatingCard } from "@/components/user-rating-card";

interface BookRatingsCardProps {
  bookRatings: Array<RatingWithAuthorConfig>;
}

export function BookRatingsCard({ bookRatings }: BookRatingsCardProps) {
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
            className={cn(
              "rounded px-3 py-1 font-bold leading-base text-purple-100 hover:bg-[#151822] hover:transition-colors",
              isOpen && "invisible"
            )}
          >
            Avaliar
          </button>
        ) : (
          <Link
            className="rounded px-3 py-1 font-bold leading-base text-purple-100 hover:bg-[#151822] hover:transition-colors"
            href="http://localhost:3000/explore/login"
          >
            Avaliar
          </Link>
        )}
      </header>

      <div className="flex flex-col space-y-3 pb-10">
        {isOpen && isAuthenticated && (
          <RatingForm
            setIsOpen={setIsOpen}
            user={{
              name: session.user.name,
              email: session.user.email,
              image: session.user.image,
              id: session.user.id,
            }}
          />
        )}

        {bookRatings.map((rating) => (
          <UserRatingCard rating={rating} key={rating.id} />
        ))}
      </div>
    </div>
  );
}
