import { NextResponse } from "next/server";
import { createSeller } from "prisma";

export async function GET(request: Request) {
  const get = await createSeller();
  return NextResponse.json({ msg: "Hello from server", get });
}
