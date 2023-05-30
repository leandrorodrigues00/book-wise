import { BookGridSearches } from "@/components/pages-components/explore/BookGridSearches";
import { PopularBooks } from "@/components/shared-components/BookCard";

export interface Categories {
  id: string;
  name: string;
}

export interface BookWithCategory extends PopularBooks {
  categories: {
    book_id: string;
    categoryId: string;
  }[];
}

async function fetchBooks(search: string) {
  const url = `http://localhost:3000/api/books?categoryId=${search}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60 * 30,
      },
    });

    if (response.ok) {
      const json: BookWithCategory[] = await response.json();
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

async function fetchCategories() {
  const url = "http://localhost:3000/api/books/categories";
  try {
    const response = await fetch(url, {
      next: { revalidate: 60 * 60 * 24 },
    });

    if (response.ok) {
      const json: Categories[] = await response.json();
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

async function getBooksByCategory(search: string) {
  "use server";
  const bookList = await fetchBooks(search);
  return bookList;
}

export default async function Explore() {
  const bookCategories = await fetchCategories();

  return (
    <section className="mx-auto mt-[42px] w-full max-w-[996px] overflow-hidden">
      <BookGridSearches
        bookCategories={bookCategories}
        getBooksByCategory={getBooksByCategory}
      />
    </section>
  );
}
