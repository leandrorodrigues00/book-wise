import Image from "next/image";

import { BookDetailsConfig } from "@/types";
import { Book, BookmarkSimple } from "@/components/icons";
import { RatingStars } from "@/components/rating-stars";

interface BookDetailsCardProps {
  selectedBook: BookDetailsConfig;
}

export function BookDetailsCard({ selectedBook }: BookDetailsCardProps) {
  const totalRatings = selectedBook.ratings.length;
  return (
    <div className="mb-10 flex max-h-[414px] flex-col space-y-10 rounded-lg bg-gray-700 px-8 py-6">
      <div className="flex w-full gap-5">
        <Image
          src={selectedBook.cover_url}
          width={173}
          height={242}
          alt={`Cover of the book ${selectedBook.name}`}
        />

        <div className="flex flex-col justify-between text-left">
          <div>
            <h2 className="line-clamp-2 font-bold leading-short">
              {selectedBook.name}
            </h2>
            <p className="text-sm leading-base text-gray-400">
              {selectedBook.author}
            </p>
          </div>
          <div className=" space-y-5">
            <RatingStars rating={selectedBook.avgRating} />
            <span className="text-sm text-gray-400">
              {totalRatings}
              {totalRatings > 1 ? " Avaliações" : " Avaliação"}
            </span>
          </div>
        </div>
      </div>

      <div className="flex space-x-14 border-t border-gray-600 pt-6">
        <div className="flex items-center gap-4">
          <BookmarkSimple className="h-6 w-6 fill-current text-green-100" />
          <div>
            <span className="text-sm leading-base text-gray-300">
              Categoria
            </span>
            <p>
              {selectedBook.categories.map((category, index) => (
                <>
                  {category.category.name}
                  {index !== selectedBook.categories.length - 1 && ", "}
                </>
              ))}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Book className="h-7 w-7 fill-current text-green-100" />
          <div>
            <span className="text-sm leading-base text-gray-300">Páginas</span>
            <p className="leading-short">{selectedBook.total_pages}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
