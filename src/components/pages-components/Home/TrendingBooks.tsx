import { TrendingUp } from "@/components/shared-components/icons";
import { BookRatings } from "./BookRatings";

interface User {
  id: string;
  name: string;
  avatar_url: string;
  created_at: string;
}

export interface Book {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
  created_at: string;
}

export interface BookRating {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book_id: string;
  user_id: string;
  book: Book;
  user: User;
}

async function fetchLatestRatings() {
  const url = "http://localhost:3000/api/ratings/latest";
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    });

    if (response.ok) {
      const json: BookRating[] = await response.json();
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
    return [];
  }
}

export async function TrendingBooks() {
  const latestRatings = await fetchLatestRatings();

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
