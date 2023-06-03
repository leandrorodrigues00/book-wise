import Image from "next/image";

import { RatingsDialog } from "@/components/pages-components/explore/RatingsDialog";
import { BookWithCategory } from "@/app/(mainContent)/explore/page";
import { Avatar } from "@/components/shared-components/Avatar";
import { RatingStars } from "@/components/shared-components/RatingStars";

import { CategoriesOnBooks, Category, Rating, User } from "@prisma/client";
import { Book, BookmarkSimple } from "@/components/shared-components/icons";

interface BookModalProps {
  params: {
    id: string;
  };
}

interface BookDetails extends BookWithCategory {
  ratings: [
    Rating & {
      user: User;
    }
  ];
  categories: (CategoriesOnBooks & {
    category: Category;
  })[];
}

async function fetchBookDetails(search: string) {
  const url = `http://localhost:3000/api/books/details/${search}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (response.ok) {
      const json: BookDetails = await response.json();
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

export default async function BookModal({ params }: BookModalProps) {
  const selectedBook = await fetchBookDetails(params.id);
  //https://github.com/vercel/next.js/issues/49243
  if (!selectedBook) throw new Error("The book details could not be loaded");

  const totalRatings = selectedBook.ratings.length;

  return (
    <RatingsDialog>
      {/* Info Book */}
      <div className="mb-10 flex flex-col space-y-10 rounded-lg bg-gray-700 px-8 py-6">
        <div className="flex w-full gap-5   ">
          <Image
            src={selectedBook.cover_url}
            width={173}
            height={242}
            alt={`Cover of the book ${selectedBook.name}`}
          />

          <div className="flex flex-col justify-between  text-left">
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
              <span className="text-sm  text-gray-400">
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
              <span className="text-sm leading-base text-gray-300">
                Páginas
              </span>
              <p className="leading-short">{selectedBook.total_pages}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <header className="mb-4 flex justify-between">
          <span className="text-sm leading-base">Avaliações</span>

          <span className="font-bold leading-base text-purple-100">
            Avaliar
          </span>
        </header>

        {/* Books Ratings */}
        <div className="flex flex-col space-y-3 pb-10">
          <div className="rounded-lg bg-gray-700 p-6">
            <header className="mb-5 flex justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://s3-alpha-sig.figma.com/img/781f/4259/81d32625ca854dec7571aa4f45a27fd3?Expires=1686528000&Signature=TkCz7UOHS~ebKr~CIg6x1xQpqL7BZqgYxLEdbEuNHvz2N6m5qR1ZH6JO5bFfHPUqun6zFkxSMJMESIK-xRzS5yLWi01Ro8m8sjSUnk5x0Qv5T~TwHw2CdQE7jnQcMU9lWw~27ScjH3j0stonu~8nLsfOvUZRfWaBOfGH3siu5Th~9h6dAuzrr8okkDnJ6dL8Z2YD2afXmiBhkejQOHGZaryKD-NhBNstql7N4-BOC39eQ49jG51Ery4nQIHLu7AUHfL5Nu-ov1IHZiKMUypsQfexcwE2zdD7sD3NWmUU2Fgf0On~FRlCfCJ490t8TUjFRD2Gxd7h29u-NTI76TafIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="TROCAR PELO NOME"
                />

                <div>
                  <p className="leading-base">Brandon Botosh</p>
                  <span className="text-sm text-gray-400">Há 2 dias</span>
                </div>
              </div>

              <RatingStars rating={4} />
            </header>

            <p className="text-sm leading-base text-gray-300">
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus
              leo. Sit porta eget nec vitae sit vulputate eget
            </p>
          </div>

          <div className="rounded-lg bg-gray-700 p-6">
            <header className="mb-5 flex justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://s3-alpha-sig.figma.com/img/781f/4259/81d32625ca854dec7571aa4f45a27fd3?Expires=1686528000&Signature=TkCz7UOHS~ebKr~CIg6x1xQpqL7BZqgYxLEdbEuNHvz2N6m5qR1ZH6JO5bFfHPUqun6zFkxSMJMESIK-xRzS5yLWi01Ro8m8sjSUnk5x0Qv5T~TwHw2CdQE7jnQcMU9lWw~27ScjH3j0stonu~8nLsfOvUZRfWaBOfGH3siu5Th~9h6dAuzrr8okkDnJ6dL8Z2YD2afXmiBhkejQOHGZaryKD-NhBNstql7N4-BOC39eQ49jG51Ery4nQIHLu7AUHfL5Nu-ov1IHZiKMUypsQfexcwE2zdD7sD3NWmUU2Fgf0On~FRlCfCJ490t8TUjFRD2Gxd7h29u-NTI76TafIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="TROCAR PELO NOME"
                />

                <div>
                  <p className="leading-base">Brandon Botosh</p>
                  <span className="text-sm text-gray-400">Há 2 dias</span>
                </div>
              </div>

              <RatingStars rating={4} />
            </header>

            <p className="text-sm leading-base text-gray-300">
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus
              leo. Sit porta eget nec vitae sit vulputate eget
            </p>
          </div>

          <div className="rounded-lg bg-gray-700 p-6">
            <header className="mb-5 flex justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://s3-alpha-sig.figma.com/img/781f/4259/81d32625ca854dec7571aa4f45a27fd3?Expires=1686528000&Signature=TkCz7UOHS~ebKr~CIg6x1xQpqL7BZqgYxLEdbEuNHvz2N6m5qR1ZH6JO5bFfHPUqun6zFkxSMJMESIK-xRzS5yLWi01Ro8m8sjSUnk5x0Qv5T~TwHw2CdQE7jnQcMU9lWw~27ScjH3j0stonu~8nLsfOvUZRfWaBOfGH3siu5Th~9h6dAuzrr8okkDnJ6dL8Z2YD2afXmiBhkejQOHGZaryKD-NhBNstql7N4-BOC39eQ49jG51Ery4nQIHLu7AUHfL5Nu-ov1IHZiKMUypsQfexcwE2zdD7sD3NWmUU2Fgf0On~FRlCfCJ490t8TUjFRD2Gxd7h29u-NTI76TafIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="TROCAR PELO NOME"
                />

                <div>
                  <p className="leading-base">Brandon Botosh</p>
                  <span className="text-sm text-gray-400">Há 2 dias</span>
                </div>
              </div>

              <RatingStars rating={4} />
            </header>

            <p className="text-sm leading-base text-gray-300">
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus
              leo. Sit porta eget nec vitae sit vulputate eget
            </p>
          </div>

          <div className="rounded-lg bg-gray-700 p-6">
            <header className="mb-5 flex justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  src="https://s3-alpha-sig.figma.com/img/781f/4259/81d32625ca854dec7571aa4f45a27fd3?Expires=1686528000&Signature=TkCz7UOHS~ebKr~CIg6x1xQpqL7BZqgYxLEdbEuNHvz2N6m5qR1ZH6JO5bFfHPUqun6zFkxSMJMESIK-xRzS5yLWi01Ro8m8sjSUnk5x0Qv5T~TwHw2CdQE7jnQcMU9lWw~27ScjH3j0stonu~8nLsfOvUZRfWaBOfGH3siu5Th~9h6dAuzrr8okkDnJ6dL8Z2YD2afXmiBhkejQOHGZaryKD-NhBNstql7N4-BOC39eQ49jG51Ery4nQIHLu7AUHfL5Nu-ov1IHZiKMUypsQfexcwE2zdD7sD3NWmUU2Fgf0On~FRlCfCJ490t8TUjFRD2Gxd7h29u-NTI76TafIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt="TROCAR PELO NOME"
                />

                <div>
                  <p className="leading-base">Brandon Botosh</p>
                  <span className="text-sm text-gray-400">Há 2 dias</span>
                </div>
              </div>

              <RatingStars rating={4} />
            </header>

            <p className="text-sm leading-base text-gray-300">
              Nec tempor nunc in egestas. Euismod nisi eleifend at et in
              sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus
              leo. Sit porta eget nec vitae sit vulputate eget
            </p>
          </div>
        </div>
      </div>
    </RatingsDialog>
  );
}
