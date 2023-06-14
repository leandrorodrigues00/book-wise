import { BookWithCategoryConfig, CategoryConfig } from "@/types";
import { BookGridSearches } from "@/components/pages-components/explore/BookGridSearches";

async function fetchBooks(search: string) {
  const url = `http://localhost:3000/api/books?categoryId=${search}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60 * 30, // 30 minutes
      },
    });

    if (response.ok) {
      const json: BookWithCategoryConfig[] = await response.json();
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

async function fetchCategories() {
  const url = "http://localhost:3000/api/books/categories";
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    });

    if (response.ok) {
      const json: CategoryConfig[] = await response.json();
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

async function getBooksByCategory(search: string) {
  "use server";
  const bookList = await fetchBooks(search);
  if (!bookList) throw new Error("Books could not be loaded");

  return bookList;
}

export default async function Explore() {
  const bookCategories = await fetchCategories();
  if (!bookCategories)
    throw new Error("The book categories could not be loaded");

  return (
    <section className="mx-auto mt-[42px] w-full max-w-[996px] overflow-hidden">
      <BookGridSearches
        bookCategories={bookCategories}
        getBooksByCategory={getBooksByCategory}
      />
    </section>
  );
}
