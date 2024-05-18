import prisma from "../../../postgres/prisma/prisma-client";

export const auctionGet = async () => {
  try {
    const allAuctions = await prisma.auction.findMany();

    return { status: 200, allAuctions };
  } catch (err: any) {
    // Debugging purpose
    console.log(err);

    return { status: 400 };
  }
};
