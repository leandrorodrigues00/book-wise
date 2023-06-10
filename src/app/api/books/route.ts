import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get("categoryId");

  let books;

  if (categoryId) {
    books = await prisma.book.findMany({
      orderBy: {
        created_at: "desc",
      },
      where: {
        categories: {
          some: {
            categoryId,
          },
        },
      },
      include: {
        categories: true,
        ratings: true,
      },
    });
  } else {
    books = await prisma.book.findMany({
      orderBy: {
        created_at: "desc",
      },
      include: {
        categories: true,
        ratings: true,
      },
    });
  }

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
