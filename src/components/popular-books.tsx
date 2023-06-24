import Link from "next/link";

import { getPopularBooks } from "@/lib/prisma";
import { BookCard } from "@/components/book-card";
import { ChevronRight } from "@/components/icons";

export async function PopularBooks() {
  const popularBooksList = await getPopularBooks();

  if (!popularBooksList)
    throw new Error("The popular book list could not be loaded");

  return (
    <div className="mt-[4.75rem] hidden w-full max-w-[20.25rem] sm:block">
      <header className="flex items-center justify-between">
        <p className="text-sm leading-base">Popular Books</p>
        <Link
          className="flex items-center gap-2 rounded px-2 py-1 text-sm font-bold leading-base text-purple-100 transition hover:bg-[#151822]"
          href="/explore"
        >
          view all
          <ChevronRight className="h-4 w-4 fill-current text-purple-100" />
        </Link>
      </header>

      <div className="mt-2 flex flex-col gap-3">
        {popularBooksList.map((book) => (
          <Link key={book.id} href={`explore/book/${book.id}`} prefetch={false}>
            <BookCard size="base" book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
}
