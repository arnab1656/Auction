import prisma from "../../../postgres/prisma/prisma-client";

export const getSpecificBidderByEmail = async (email: string) => {
  try {
    const specificBidder = await prisma.bidder.findUnique({
      where: {
        email,
      },
    });

    if (specificBidder) {
      return { status: 200, specificBidder };
    } else {
      return { status: 404 };
    }
  } catch (err: any) {
    // Debugging purpose

    console.error(err);

    return { status: 500 };
  }
};
