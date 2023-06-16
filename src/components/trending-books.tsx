import { RatingConfig } from "@/types";
import { BookRatings } from "@/components/book-ratings";
import { TrendingUp } from "@/components/icons";

async function fetchLatestRatings() {
  const url = "http://localhost:3000/api/ratings/latest";
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60 * 10, // 10 minutes
      },
    });

    if (response.ok) {
      const json: RatingConfig[] = await response.json();
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

export async function TrendingBooks() {
  const latestRatings = await fetchLatestRatings();
  if (!latestRatings)
    throw new Error("The latest classifications could not be loaded");

  return (
    <div className="no-scrollbar h-full w-full max-w-[608px] overflow-y-auto pb-10">
      <h1 className="flex gap-3 text-2xl font-bold leading-short">
        <TrendingUp className="h-[32px] w-[32px] fill-current text-green-100" />
        Inicio
      </h1>

      <div className="mt-10">
        <p className="mb-4 text-sm leading-base">Avaliações mais recentes</p>

        <div className="flex flex-col gap-3">
          {latestRatings.map((ratings, index) => (
            <BookRatings ratings={ratings} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
