import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const bookId = params.slug;

  const book = await prisma.book.findMany({
    where: {
      id: bookId,
    },

    include: {
      categories: {
        include: {
          category: true,
        },
      },

      ratings: {
        include: {
          user: true,
        },
      },
    },
  });

  const booksAvgRating = await prisma.rating.groupBy({
    by: ["book_id"],

    where: {
      book_id: bookId,
    },

    _avg: {
      rate: true,
    },
  });

  const bookWithAvgRating = {
    ...book[0],
    avgRating: booksAvgRating[0]._avg.rate ?? 0,
  };

  return NextResponse.json(bookWithAvgRating);
}
