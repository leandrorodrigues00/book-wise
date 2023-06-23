import { getBookCategories } from "@/lib/prisma";
import { BookGridSearches } from "@/components/book-grid-searches";

export default async function Explore() {
  const bookCategories = await getBookCategories();
  if (!bookCategories)
    throw new Error("The book categories could not be loaded");

  return (
    <section className="mx-auto mt-[42px] w-full max-w-[996px] overflow-hidden">
      <BookGridSearches bookCategories={bookCategories} />
    </section>
  );
}
