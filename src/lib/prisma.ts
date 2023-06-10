// In order to avoid multiple prisma instance error when working with Next13 and Prisma we export this global variable into the needed parts of the project.
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;
