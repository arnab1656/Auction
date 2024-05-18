import { NextResponse } from "next/server";
import { createBidder } from "prisma";

export async function GET(request: Request) {
  const get = await createBidder();
  return NextResponse.json({ msg: "Hello from server createBidder", get });
}
