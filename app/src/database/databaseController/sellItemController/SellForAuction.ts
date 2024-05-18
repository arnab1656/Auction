import prisma from "../../../postgres/prisma/prisma-client";
import type { CreateAuctionInput } from "../../inputSchema/auction-schema";

import { createAuction } from "../auctionController/AuctionCreate";

export const sellForAuction = async (input: CreateAuctionInput) => {
  const currentDate = new Date();

  if (currentDate >= input.startDate && currentDate < input.endDate)
    input.active = true;
  else {
    input.active = false;
  }

  try {
    const res = await createAuction(input);
    return {
      res,
    };
  } catch (err: any) {
    console.log(err);
    return { status: 400 };
  }
};
