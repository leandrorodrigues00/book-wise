import Link from "next/link";

import { BookRatings } from "@/components/pages-components/Home/BookRatings";
import { ChevronRight, TrendingUp } from "@/components/shared-components/icons";
import { BookCard } from "@/components/shared-components/BookCard";

export default function Home() {
  return (
    <section className="mt-[42px] max-w-[996px] w-full mx-auto flex gap-16 ">
      <div className="pb-10 overflow-y-auto h-full no-scrollbar max-w-[608px] w-full ">
        <h1 className="flex gap-3 font-bold text-2xl leading-short">
          <TrendingUp className="fill-current text-green-100 w-[32px] h-[32px]  " />
          Inicio
        </h1>

        <div className="mt-10">
          <p className="text-sm leading-base mb-4">Avaliações mais recentes</p>

          <div className="flex flex-col gap-3">
            <BookRatings />
            <BookRatings />
            <BookRatings />
            <BookRatings />
            <BookRatings />
          </div>
        </div>
      </div>

      <div className="max-w-[20.25rem] w-full mt-[4.75rem]">
        <header className="flex justify-between">
          <p className="text-sm leading-base">Livros populares</p>
          <Link
            className="flex items-center gap-2 text-sm text-purple-100 font-bold leading-base"
            href="/"
          >
            Ver todos
            <ChevronRight className="text-purple-100 fill-current w-4 h-4" />
          </Link>
        </header>

        <div className="flex flex-col gap-3 mt-4">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </section>
  );
}
