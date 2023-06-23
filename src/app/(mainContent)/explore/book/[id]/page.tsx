import { getBookDetails } from "@/lib/prisma";
import { BookDetailsCard } from "@/components/book-details-card";
import { BookRatingsCard } from "@/components/book-ratings-card";

interface BookPageProps {
  params: {
    id: string;
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const selectedBook = await getBookDetails(params.id);

  if (!selectedBook) throw new Error("The book details could not be loaded");

  return (
    <div className="mx-auto my-10 w-[660px] ">
      <BookDetailsCard selectedBook={selectedBook} />
      <BookRatingsCard bookId={params.id} bookRatings={selectedBook.ratings} />
    </div>
  );
}
