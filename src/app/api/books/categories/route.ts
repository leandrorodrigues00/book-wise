import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

export async function GET() {
  const books = await prisma.category.findMany({});
  return NextResponse.json(books);
}
