import prisma from "../../../postgres/prisma/prisma-client";

export const auctionStatusUpdate = async (
  auctionId: number,
  status: boolean
) => {
  try {
    const UpdatedAuction = await prisma.auction.update({
      where: { id: auctionId },
      data: { active: status },
    });
    return { status: 200, UpdatedAuction };
  } catch (err: any) {
    // Debugging purpose
    console.log(err);

    return { status: 400 };
  }
};
