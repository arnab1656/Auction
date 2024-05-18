import prisma from "../../../postgres/prisma/prisma-client";

export const getAuctionWithBidDetails = async (auctionId: number) => {
  try {
    const bidDetails = await prisma.auction.findUnique({
      where: { id: auctionId },
      include: {
        bids: true, // Include the bids associated with this auction
      },
    });

    if (bidDetails) {
      return { status: 200, bids: bidDetails.bids };
    } else {
      return { status: 404 };
    }
  } catch (err: any) {
    // Debugging purpose

    console.error(err);

    return { status: 500 };
  }
};
