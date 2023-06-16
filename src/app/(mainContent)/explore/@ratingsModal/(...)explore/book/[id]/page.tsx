import { BookDetailsConfig } from "@/types";
import { BookDetailsCard } from "@/components/book-details-card";
import { BookRatingsCard } from "@/components/book-ratings-card";
import { RatingsDialog } from "@/components/ratings-dialog";

interface BookModalProps {
  params: {
    id: string;
  };
}

export async function fetchBookDetails(search: string) {
  const url = `http://localhost:3000/api/books/details/${search}`;

  try {
    const response = await fetch(url, {
      cache: "no-store",
    });

    if (response.ok) {
      const json: BookDetailsConfig = await response.json();
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

  return (
    <RatingsDialog>
      <BookDetailsCard selectedBook={selectedBook} />

      <BookRatingsCard bookRatings={selectedBook.ratings} />
    </RatingsDialog>
  );
}
