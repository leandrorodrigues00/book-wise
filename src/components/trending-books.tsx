import { getLatestRatings } from "@/lib/prisma";
import { BookRatings } from "@/components/book-ratings";
import { TrendingUp } from "@/components/icons";
import { UserLastReadCard } from "@/components/user-last-read-card";

export async function TrendingBooks() {
  const latestRatings = await getLatestRatings();
  if (!latestRatings)
    throw new Error("The latest classifications could not be loaded");

  return (
    <div className="no-scrollbar h-full w-full max-w-[608px] overflow-y-auto pb-10">
      <h1 className="flex gap-3 text-2xl font-bold leading-short">
        <TrendingUp className="h-[32px] w-[32px] fill-current text-green-100" />
        Inicio
      </h1>

      {/* @ts-expect-error Server Component */}
      <UserLastReadCard />

      <div className="mt-10">
        <p className="mb-4 text-sm leading-base">Avaliações mais recentes</p>

        <div className="flex flex-col gap-3">
          {latestRatings.map((ratings) => (
            <BookRatings ratings={ratings} key={ratings.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
