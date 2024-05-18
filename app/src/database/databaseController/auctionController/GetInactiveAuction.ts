import prisma from "../../../postgres/prisma/prisma-client";

export const getInactiveAuction = async () => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // Calculate date 7 days ago

    // Fetching the auction data that isnot active and not processed and the search period is of 7 days

    const recentInactiveAuctions = await prisma.auction.findMany({
      where: {
        endDate: { gte: sevenDaysAgo }, // End date is within the last 7 days
        active: false, // Auction is inactive
        processed: false,
      },
    });

    if (recentInactiveAuctions) {
      return { status: 200, recentInactiveAuctions };
    } else {
      return { status: 404, recentInactiveAuctions: null };
    }
  } catch (error) {
    // Debugging purpose

    console.error(error);

    return { status: 500 };
  }
};
