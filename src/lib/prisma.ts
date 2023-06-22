import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// In order to avoid multiple prisma instance error when working with Next13 and Prisma we export this global variable into the needed parts of the project.
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;

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
