import { PrismaClient } from "@prisma/client";

import { getMostFrequentString } from "@/lib/utils";

declare global {
  var prisma: PrismaClient | undefined;
}

// In order to avoid multiple prisma instance error when working with Next13 and Prisma we export this global variable into the needed parts of the project.
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;

export async function getLatestRatings() {
  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      book: true,
      user: true,
    },
    take: 10,
  });

  return ratings;
}

export async function getLatestUserRating(userId: string) {
  const rating = await prisma.rating.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      book: true,
    },
  });

  return rating;
}

export async function getPopularBooks() {
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
      avgRating: bookAvgRating?._avg.rate ?? 0,
    };
  });

  return booksWithAvgRating;
}

export async function getBookCategories() {
  const books = await prisma.category.findMany({});
  return books;
}

export async function getBooks(
  userId: string | null,
  categoryId: string | null
) {
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

  let userBooksIds: string[] = [];

  if (userId) {
    const userBooks = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            userId: userId,
          },
        },
      },
    });

    userBooksIds = userBooks?.map((x) => x?.id);
  }

  const booksWithAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id
    );

    const { ratings, ...bookInfo } = book;

    return {
      ...bookInfo,
      avgRating: bookAvgRating?._avg.rate ?? 0,
      alreadyRead: userBooksIds.includes(book.id),
    };
  });

  return booksWithAvgRating;
}

export async function getProfileDetails(userId: string) {
  const profile = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        include: {
          book: {
            include: {
              categories: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
        orderBy: {
          created_at: "desc",
        },
      },
    },
  });

  if (!profile) {
    return;
  }

  const readPages = profile?.ratings.reduce(
    (acc, rating) => acc + rating.book.total_pages,
    0
  );

  const ratedBooks = profile?.ratings.length;

  const readAuthors = profile?.ratings.reduce((acc, rating) => {
    if (!acc.includes(rating.book.author)) {
      acc.push(rating.book.author);
    }
    return acc;
  }, [] as string[]);

  const categories = profile?.ratings?.flatMap((rating) =>
    rating?.book?.categories?.flatMap((category) => category?.category?.name)
  );

  const mostReadCategory =
    categories && categories.length > 0
      ? getMostFrequentString(categories)
      : null;

  const profileData = {
    user: {
      id: profile?.id,
      name: profile?.name,
      image: profile?.image,
      member_since: profile?.created_at,
    },
    ratings: profile?.ratings,
    readPages,
    ratedBooks,
    readAuthors: readAuthors?.length,
    mostReadCategory,
  };

  return profileData;
}

export async function getBookDetails(bookId: string) {
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
    avgRating: booksAvgRating.length > 0 ? booksAvgRating[0]._avg.rate ?? 0 : 0,
  };

  return bookWithAvgRating;
}
