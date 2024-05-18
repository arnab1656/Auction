import prisma from "../../../postgres/prisma/prisma-client";
import type { CreateBidderInput } from "../../inputSchema/bidder-schema";

// import { PrismaClient, Prisma } from "@prisma/client";

// const prisma = new PrismaClient();

export const createBidder = async (input: CreateBidderInput) => {
  try {
    const newBidder = await prisma.bidder.create({
      data: input,
    });

    return {
      status: 200,
      newBidder,
    };
  } catch (err: any) {
    console.log(err);
    return {
      status: 401,
    };
  }
};
