import prisma from "../../../postgres/prisma/prisma-client";
import type { CreateBidInput } from "../../inputSchema/bid-schema";

export const createBid = async (input: CreateBidInput) => {
  try {
    const newBid = await prisma.bid.create({
      data: {
        amount: input.amount,
        bidderId: input.bidderId,
        auctionId: input.auctionId,
      },
    });
    return { status: 200, newBid };
  } catch (err: any) {
    return { status: 401 };
  }
};
