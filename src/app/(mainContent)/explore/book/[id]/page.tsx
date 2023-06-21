import { BookDetailsCard } from "@/components/book-details-card";
import { BookRatingsCard } from "@/components/book-ratings-card";

import { fetchBookDetails } from "../../@ratingsModal/(...)explore/book/[id]/page";

interface BookPageProps {
  params: {
    id: string;
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const selectedBook = await fetchBookDetails(params.id);

  if (!selectedBook) throw new Error("The book details could not be loaded");

  return (
    <div className="mx-auto my-10 w-[660px] ">
      <BookDetailsCard selectedBook={selectedBook} />
      <BookRatingsCard bookId={params.id} bookRatings={selectedBook.ratings} />
    </div>
  );
}
