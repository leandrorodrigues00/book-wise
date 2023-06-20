import Link from "next/link";

import { BookWithRatingConfig } from "@/types";
import { BookCard } from "@/components/book-card";
import { ChevronRight } from "@/components/icons";

async function fetchPopularBooks() {
  const url = "http://localhost:3000/api/books/popular";
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    });

    if (response.ok) {
      const json: BookWithRatingConfig[] = await response.json();
      return json;
    } else {
      throw new Error(
        `Error fetching data from URL ${url}. Response status: ${response.status}`
      );
    }
  } catch (error) {
    if (error instanceof Error)
      console.error(
        `Error fetching data from URL ${url}. Message: ${error.message}`
      );
    return null;
  }
}

export async function PopularBooks() {
  const popularBooksList = await fetchPopularBooks();
  if (!popularBooksList)
    throw new Error("The popular book list could not be loaded");

  return (
    <div className="mt-[4.75rem] w-full max-w-[20.25rem]">
      <header className="flex items-center justify-between">
        <p className="text-sm leading-base">Livros populares</p>
        <Link
          className="flex items-center gap-2 rounded px-2 py-1 text-sm font-bold leading-base text-purple-100 transition hover:bg-[#151822]"
          href="/explore"
        >
          Ver todos
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
