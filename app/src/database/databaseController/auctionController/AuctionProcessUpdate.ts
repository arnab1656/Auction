import prisma from "../../../postgres/prisma/prisma-client";

export const auctionProcessUpdate = async (
  auctionId: number,
  status: boolean
) => {
  try {
    const updatedAuction = await prisma.auction.update({
      where: { id: auctionId },
      data: { processed: status }, // Update the processed field
    });
    return { status: 200, updatedAuction };
  } catch (err: any) {
    // Debugging purpose
    console.log(err);

    return { status: 400 };
  }
};
