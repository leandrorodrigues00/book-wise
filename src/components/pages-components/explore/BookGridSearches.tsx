"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { BookWithCategory, Categories } from "@/app/(mainContent)/explore/page";
import { BookCard } from "@/components/shared-components/BookCard";
import { Form } from "@/components/shared-components/Form";

import {
  Binoculars,
  MagnifyingGlass,
} from "@/components/shared-components/icons";

interface BookGridSearchesProps {
  bookCategories: Categories[];
  getBooksByCategory: (search: string) => Promise<BookWithCategory[]>;
}

export function BookGridSearches({
  bookCategories,
  getBooksByCategory,
}: BookGridSearchesProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [bookList, setBookList] = useState<BookWithCategory[]>([]);
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
  }, [getBooksByCategory]);

  const filteredBooks = bookList.filter((book) => {
    return (
      book.name.toLowerCase().includes(searchString.toLowerCase()) ||
      book.author.toLowerCase().includes(searchString.toLowerCase())
    );
  });

  async function handleChangeCategory(categoryId: string) {
    setSelectedCategory(categoryId);
    setBookList(await getBooksByCategory(categoryId));
  }

  return (
    <>
      <div className="mb-12 flex w-full flex-col">
        <header className="mb-10 flex items-center justify-between">
          <p className="flex gap-3 text-2xl font-bold leading-short">
            <Binoculars className="h-[32px] w-[32px] fill-current text-green-100" />
            Explorar
          </p>

          {/* Book Input */}
          <Form.Input
            name="livro"
            placeholder="Buscar Livro ou autor"
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
            className={`rounded-full border  px-4 leading-base  transition ${
              selectedCategory === ""
                ? "border-transparent bg-purple-200 text-gray-100"
                : " border-purple-100 text-purple-100 hover:border-purple-200 hover:text-purple-200"
            }`}
          >
            Tudo
          </button>
          {bookCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleChangeCategory(category.id)}
              className={`rounded-full border  px-4 leading-base  transition ${
                category.id === selectedCategory
                  ? "border-transparent bg-purple-200 text-gray-100"
                  : " border-purple-100 text-purple-100 hover:border-purple-200 hover:text-purple-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Books Grid  */}
      <div className="no-scrollbar grid max-h-[690px]  grid-cols-3 gap-5 overflow-y-auto pb-10">
        {isLoading ? (
          <p className="text-purple-400">Carregando livros...</p>
        ) : filteredBooks.length === 0 ? (
          <p className="text-purple-400">Nenhum livro encontrado.</p>
        ) : (
          filteredBooks.map((book, index) => (
            <Link key={index} href={`explore/book/${book.id}`}>
              <BookCard key={index} book={book} size="lg" />
            </Link>
          ))
        )}
      </div>
    </>
  );
}
