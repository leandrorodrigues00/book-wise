import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET() {
  const books = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: "desc",
      },
    },

    include: {
      ratings: true,
    },

    take: 4,
  });

  const booksAvgRating = await prisma.rating.groupBy({
    by: ["book_id"],
    where: {
      book_id: {
        in: books.map((book) => book.id),
      },
    },

    _avg: {
      rate: true,
    },
  });

  const booksWithAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id
    );

    const { ratings, ...bookInfo } = book;

    return {
      ...bookInfo,
      avgRating: bookAvgRating?._avg.rate,
    };
  });

  return NextResponse.json(booksWithAvgRating);
}
