import { RatingsDialog } from "@/components/pages-components/explore/@modal/RatingsDialog";
import { BookWithCategory } from "@/app/(mainContent)/explore/page";
import { BookDetailsCard } from "@/components/pages-components/explore/@modal/BookDetailsCard";
import {
  RatingWithAuthor,
  UserRatingCard,
} from "@/components/pages-components/explore/@modal/UserRatingCard";

import { CategoriesOnBooks, Category } from "@prisma/client";
import { RatingForm } from "@/components/pages-components/explore/@modal/RatingForm";
import { BookRatingsCard } from "@/components/pages-components/explore/@modal/BookRatingsCard";

interface BookModalProps {
  params: {
    id: string;
  };
}

export interface BookDetails extends BookWithCategory {
  ratings: Array<RatingWithAuthor>;
  categories: Array<
    CategoriesOnBooks & {
      category: Category;
    }
  >;
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

  return (
    <RatingsDialog>
      {/* Info Book */}
      <BookDetailsCard selectedBook={selectedBook} />

      <BookRatingsCard bookRatings={selectedBook.ratings} />
    </RatingsDialog>
  );
}
