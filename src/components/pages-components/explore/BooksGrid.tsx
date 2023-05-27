"use client";

import { BookWithCategory } from "@/app/(mainContent)/explore/page";
import { BookCard } from "@/components/shared-components/BookCard";

export function BooksGrid({ bookList }: { bookList: BookWithCategory[] }) {
  return (
    <div className="no-scrollbar grid max-h-[690px] grid-cols-3 gap-5 overflow-y-auto pb-10">
      {bookList.map((book, index) => (
        <BookCard key={index} book={book} size="lg" />
      ))}
    </div>
  );
}
