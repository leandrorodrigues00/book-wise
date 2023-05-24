import { BookCard } from "@/components/shared-components/BookCard";
import { ChevronRight } from "@/components/shared-components/icons";
import Link from "next/link";

export function PopularBooks() {
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
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
