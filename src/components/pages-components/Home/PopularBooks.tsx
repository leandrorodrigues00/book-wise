import Link from "next/link";

import {
  BookCard,
  PopularBooks,
} from "@/components/shared-components/BookCard";
import { ChevronRight } from "@/components/shared-components/icons";

async function fetchData() {
  const url = "http://localhost:3000/api/books/popular";
  try {
    const response = await fetch(url, {
      cache: "no-cache",
    });

    if (response.ok) {
      const json: PopularBooks[] = await response.json();
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
    return [];
  }
}

export async function PopularBooks() {
  const popularBooksList = await fetchData();

  return (
    <div className="mt-[4.75rem] w-full max-w-[20.25rem]">
      <header className="flex justify-between">
        <p className="text-sm leading-base">Livros populares</p>
        <Link
          className="flex items-center gap-2 text-sm font-bold leading-base text-purple-100"
          href="/"
        >
          Ver todos
          <ChevronRight className="h-4 w-4 fill-current text-purple-100" />
        </Link>
      </header>

      <div className="mt-4 flex flex-col gap-3">
        {popularBooksList.map((book, index) => (
          <BookCard size="base" book={book} key={index} />
        ))}
      </div>
    </div>
  );
}
