import { NextResponse } from "next/server";
import { createBid } from "prisma";

export async function GET(request: Request) {
  const get = await createBid();
  return NextResponse.json({ msg: "Hello from server createBid", get });
}
