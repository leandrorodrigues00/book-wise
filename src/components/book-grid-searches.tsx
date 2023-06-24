"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { BookWithCategoryConfig, CategoryConfig } from "@/types";
import { cn } from "@/lib/utils";
import { Form } from "@/components/ui/form";
import { BookCard } from "@/components/book-card";
import { Binoculars, MagnifyingGlass } from "@/components/icons";
import { getBooksByCategory } from "@/app/actions";

interface BookGridSearchesProps {
  bookCategories: CategoryConfig[];
}

export function BookGridSearches({ bookCategories }: BookGridSearchesProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [bookList, setBookList] = useState<BookWithCategoryConfig[]>([]);
  const [searchString, setSearchString] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    ""
  );

  //Fills the books when the component is first mounted
  useEffect(() => {
    setIsLoading(true);
    getBooksByCategory("").then((books) => {
      setBookList(books);
      setIsLoading(false);
    });
  }, []);

  const filteredBooks = bookList.filter((book) => {
    return (
      book.name.toLowerCase().includes(searchString.toLowerCase()) ||
      book.author.toLowerCase().includes(searchString.toLowerCase())
    );
  });

  async function handleChangeCategory(categoryId: string) {
    setSelectedCategory(categoryId);
    setIsLoading(true);
    setBookList(await getBooksByCategory(categoryId));
    setIsLoading(false);
  }

  return (
    <>
      <div className="mb-12 flex w-full flex-col">
        <header className="mb-10 flex items-center justify-between">
          <p className="flex gap-3 text-2xl font-bold leading-short">
            <Binoculars className="h-[32px] w-[32px] fill-current text-green-100" />
            Explore
          </p>

          {/* Book Input */}
          <Form.Input
            name="livro"
            placeholder="Search Book or Author"
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            icon={
              <MagnifyingGlass className="h-5 w-5 fill-current text-gray-500 group-focus-within:text-green-200" />
            }
            className="group flex w-full max-w-[433px] rounded border border-gray-500 bg-gray-800 px-5 py-3 text-sm leading-base focus-within:border-green-200"
          />
        </header>

        {/* Book tags */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleChangeCategory("")}
            className={cn(
              "rounded-full border px-4 leading-base transition",
              selectedCategory === ""
                ? "border-transparent bg-purple-200 text-gray-100"
                : "border-purple-100 text-purple-100 transition hover:border-gray-300 hover:text-gray-300"
            )}
          >
            All
          </button>
          {bookCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleChangeCategory(category.id)}
              className={cn(
                "rounded-full border px-4 leading-base  transition",
                category.id === selectedCategory
                  ? "border-transparent bg-purple-200 text-gray-100"
                  : "border-purple-100 text-purple-100 transition hover:border-gray-300 hover:text-gray-300"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid  */}
      <div className="no-scrollbar grid max-h-[690px] grid-cols-1 gap-5 overflow-y-auto   pb-10 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <p className="font-bold leading-short text-gray-400">
            Loading books...
          </p>
        ) : filteredBooks.length === 0 ? (
          <p className="font-bold leading-short text-gray-400">
            No books found.
          </p>
        ) : (
          filteredBooks.map((book) => (
            <Link key={book.id} href={`explore/book/${book.id}`}>
              <BookCard book={book} size="lg" />
            </Link>
          ))
        )}
      </div>
    </>
  );
}
