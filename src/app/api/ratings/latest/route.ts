import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET() {
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
  return NextResponse.json(ratings);
}
