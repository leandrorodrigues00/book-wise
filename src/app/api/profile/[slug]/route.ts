import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { getMostFrequentString } from "@/lib/utils";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const userId = params.slug;

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

  return NextResponse.json({ profile: profileData });
}
