import prisma from "../../../postgres/prisma/prisma-client";

import type { CreateAuctionInput } from "../../inputSchema/auction-schema";

export const createAuction = async (input: CreateAuctionInput) => {
  try {
    const newAuction = await prisma.auction.create({
      data: input,
    });
    return { status: 200, newAuction };
  } catch (err: any) {
    // Debugging purpose
    console.log(err);

    return { status: 400 };
  }
};
