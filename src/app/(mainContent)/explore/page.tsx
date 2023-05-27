import {
  BookSearchInput,
  BookTags,
  BooksGrid,
} from "@/components/pages-components/explore";
import { PopularBooks } from "@/components/shared-components/BookCard";
import { Binoculars } from "@/components/shared-components/icons";

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

async function fetchBooks() {
  const url = `http://localhost:3000/api/books`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60 * 30, // 30 minutes
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

export default async function Explore({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const bookList = await fetchBooks();
  const bookCategories = await fetchCategories();

  function searchBooksByCategory() {
    const categoryId = searchParams.category;

    if (categoryId) {
      const filteredBooks = bookList.filter((book) =>
        book.categories.some((category) => category.categoryId === categoryId)
      );

      return filteredBooks;
    } else {
      return bookList;
    }
  }

  function searchBooksByNameOrAuthor() {
    const name = searchParams.search;

    if (name && typeof name === "string") {
      const filteredBooks = bookList.filter(
        (book) =>
          book.name.toLowerCase().includes(name.toLowerCase()) ||
          book.author.toLowerCase().includes(name.toLowerCase())
      );
      return filteredBooks;
    } else {
      return bookList;
    }
  }

  const book = searchBooksByCategory();

  return (
    <section className="mx-auto mt-[42px] w-full max-w-[996px] overflow-hidden">
      <div className="mb-12 flex w-full flex-col">
        <header className="mb-10 flex items-center justify-between">
          <p className="flex gap-3 text-2xl font-bold leading-short">
            <Binoculars className="h-[32px] w-[32px] fill-current text-green-100  " />
            Explorar
          </p>

          <BookSearchInput />
        </header>

        <BookTags bookCategories={bookCategories} />
      </div>

      <BooksGrid bookList={book} />
    </section>
  );
}
