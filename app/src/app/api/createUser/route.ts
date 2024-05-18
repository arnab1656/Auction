import { NextResponse } from "next/server";
import { createUser } from "prisma";

export async function GET(request: Request) {
  const get = await createUser();

  return NextResponse.json({ msg: "Hello from aucitn details is made", get });
}
