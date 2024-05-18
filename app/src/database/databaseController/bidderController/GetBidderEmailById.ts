import prisma from "../../../postgres/prisma/prisma-client";

export const getBidderEmailById = async (id: number) => {
  try {
    const specificBidderEmail = await prisma.bidder.findUnique({
      where: {
        id,
      },
    });

    if (specificBidderEmail) {
      return { status: 200, specificBidderEmail };
    } else {
      return { status: 404 };
    }
  } catch (err: any) {
    // Debugging purpose

    console.error(err);

    return { status: 500 };
  }
};
