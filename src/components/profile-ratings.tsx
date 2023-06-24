"use client";

import { useMemo, useState } from "react";

import { UserProfileConfig } from "@/types";
import { Form } from "@/components/ui/form";
import { MagnifyingGlass } from "@/components/icons";
import ProfileRatingsCard from "@/components/profile-ratings-card";

interface ProfileRatingsProps {
  profile: UserProfileConfig;
}

export function ProfileRatings({ profile }: ProfileRatingsProps) {
  const [search, setSearch] = useState("");

  const filteredBooks = useMemo(() => {
    return profile.ratings.filter((rating) => {
      return rating.book.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [profile, search]);

  return (
    <>
      <Form.Input
        name="profileBook"
        placeholder="Search Rated Book"
        icon={
          <MagnifyingGlass className="h-5 w-5 fill-current text-gray-500 group-focus-within:text-green-200" />
        }
        value={search}
        onChange={(props) => setSearch(props.target.value)}
        className="group mt-10 flex w-full rounded border border-gray-500 bg-gray-800 px-5 py-3 text-sm leading-base focus-within:border-green-200"
      />

      <div className="mt-8">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((rating) => (
            <ProfileRatingsCard key={rating.id} rating={rating} />
          ))
        ) : (
          <p className="font-bold leading-short text-gray-400">
            {search ? "No results found" : "No reviews found"}
          </p>
        )}
      </div>
    </>
  );
}
