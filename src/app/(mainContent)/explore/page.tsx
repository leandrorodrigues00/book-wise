import { BookCard } from "@/components/shared-components/BookCard";
import { Form } from "@/components/shared-components/Form";
import {
  Binoculars,
  MagnifyingGlass,
} from "@/components/shared-components/icons";

export default function Explore() {
  return (
    <section className="mt-[42px] max-w-[996px] w-full mx-auto overflow-hidden">
      <div className="flex flex-col w-full mb-12">
        <header className="flex justify-between items-center mb-10">
          <p className="flex gap-3 font-bold text-2xl leading-short">
            <Binoculars className="fill-current text-green-100 w-[32px] h-[32px]  " />
            Explorar
          </p>

          <Form.Input
            name="livro"
            placeholder="Buscar Livro ou autor"
            icon={
              <MagnifyingGlass className="w-5 h-5 text-gray-500 fill-current group-focus-within:text-green-200" />
            }
            className="flex group max-w-[433px] w-full bg-gray-800 py-3 px-5 border border-gray-500 rounded text-sm leading-base focus-within:border-green-200"
          />
        </header>

        <div className="flex gap-3">
          <button className="px-4 py-1 rounded-full border border-purple-100 text-purple-100 leading-base">
            Tudo
          </button>
          <button className="px-4 py-1 rounded-full border border-purple-100 text-purple-100 leading-base">
            Computação
          </button>
          <button className="px-4 py-1 rounded-full border border-purple-100 text-purple-100 leading-base">
            Educação
          </button>
          <button className="px-4 py-1 rounded-full border border-purple-100 text-purple-100 leading-base">
            Fantasia
          </button>
          <button className="px-4 py-1 rounded-full border border-purple-100 text-purple-100 leading-base">
            Ficção científica
          </button>
          <button className="px-4 py-1 rounded-full border border-purple-100 text-purple-100 leading-base">
            Horror
          </button>
          <button className="px-4 py-1 rounded-full border border-purple-100 text-purple-100 leading-base">
            HQs
          </button>
          <button className="px-4 py-1 rounded-full border border-purple-100 text-purple-100 leading-base">
            Suspense
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 pb-10 max-h-[700px] overflow-y-auto no-scrollbar">
        <BookCard size="lg" />
        <BookCard size="lg" />
        <BookCard size="lg" />

        <BookCard size="lg" />
        <BookCard size="lg" />
        <BookCard size="lg" />

        <BookCard size="lg" />
        <BookCard size="lg" />
        <BookCard size="lg" />

        <BookCard size="lg" />
        <BookCard size="lg" />
        <BookCard size="lg" />

        <BookCard size="lg" />
        <BookCard size="lg" />
        <BookCard size="lg" />
      </div>
    </section>
  );
}
