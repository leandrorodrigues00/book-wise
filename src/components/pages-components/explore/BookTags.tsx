"use client";

import { useRouter } from "next/navigation";

import { Categories } from "@/app/(mainContent)/explore/page";

interface ExploreTagProps {
  bookCategories: Categories[];
}

export function BookTags({ bookCategories }: ExploreTagProps) {
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => router.push("/explore")}
        className="rounded-full border border-purple-100 px-4 leading-base text-purple-100"
      >
        Tudo
      </button>
      {bookCategories.map((category, index) => (
        <button
          key={index}
          className="rounded-full border border-purple-100 px-4 leading-base text-purple-100"
          onClick={() => router.push(`/explore?category=${category.id}`)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
