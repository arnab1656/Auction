import { NextResponse } from "next/server";
import { createAuction } from "prisma";

export async function GET(request: Request) {
  const get = await createAuction();

  console.log("from route");
  console.log(get);

  return NextResponse.json({ msg: "Hello from aucitn details is made", get });
}
