import prisma from "../../../postgres/prisma/prisma-client";

export const getSpecificAuction = async (auctionId: number) => {
  console.log(auctionId);
  try {
    const specificAuction = await prisma.auction.findUnique({
      where: {
        id: auctionId,
      },
    });

    if (specificAuction) {
      return { status: 200, specificAuction };
    } else {
      return { status: 404 };
    }
  } catch (err: any) {
    // Debugging purpose

    console.error(err);

    return { status: 500 };
  }
};
