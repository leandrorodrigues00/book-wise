import { getBookDetails } from "@/lib/prisma";
import { BookDetailsCard } from "@/components/book-details-card";
import { BookRatingsCard } from "@/components/book-ratings-card";
import { RatingsDialog } from "@/components/ratings-dialog";

interface BookModalProps {
  params: {
    id: string;
  };
}

export default async function BookModal({ params }: BookModalProps) {
  const selectedBook = await getBookDetails(params.id);
  //https://github.com/vercel/next.js/discussions/50107#discussioncomment-5965956
  if (!selectedBook) throw new Error("The book details could not be loaded");

  return (
    <RatingsDialog>
      <BookDetailsCard selectedBook={selectedBook} />

      <BookRatingsCard bookId={params.id} bookRatings={selectedBook.ratings} />
    </RatingsDialog>
  );
}
