"use server";

import { revalidatePath } from "next/cache";
import * as z from "zod";

import prisma, { getBooks } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

type createUserRatingProps = {
  description: string;
  bookId: string;
  currentRate: number;
};

const ratingSchema = z.object({
  description: z.string().max(450, { message: "Maximum 450 characters" }),
  currentRate: z
    .number()
    .min(1, { message: "You must rate with at least 1 star" })
    .max(5),
  bookId: z.string().nonempty({ message: "Unable to find the book" }),
});

export async function createUserRating({
  description,
  currentRate,
  bookId,
}: createUserRatingProps) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");

  const validationResult = ratingSchema.safeParse({
    description,
    currentRate,
    bookId,
  });

  if (!validationResult.success) {
    const errorMessage = validationResult.error.issues
      .map((issue) => issue.message)
      .join(", ");
    throw new Error(errorMessage);
  }

  const userAlreadyRated = await prisma.rating.findFirst({
    where: {
      userId: user.id,
      book_id: bookId,
    },
  });

  if (userAlreadyRated) throw new Error("You already rated this book");

  await prisma.rating.create({
    data: {
      book_id: bookId,
      description: description,
      rate: currentRate,
      userId: user.id,
    },
  });

  revalidatePath("/explore/book/");
}

export async function getBooksByCategory(search: string) {
  const user = await getCurrentUser();

  const bookList = await getBooks(user?.id ?? null, search);
  if (!bookList) throw new Error("Books could not be loaded");

  return bookList;
}
