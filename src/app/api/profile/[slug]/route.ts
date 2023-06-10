import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { slug: string };
  }
) {
  const sessionToken = params.slug;

  const userId = await prisma.session.findFirstOrThrow({
    where: {
       sessionToken: sessionToken,
    },
  });

  const profile = await prisma.user.findUnique({
    where: {
      id: userId.userId,
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
      sessions: {},
      accounts: {},
    },
  });
  return NextResponse.json(profile);
}
