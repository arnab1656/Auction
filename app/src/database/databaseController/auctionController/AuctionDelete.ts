import prisma from "../../../postgres/prisma/prisma-client";

export async function auctionDataDelete() {
  try {
    // Delete all rows from the Auction table
    const deleteResult = await prisma.auction.deleteMany();

    return { status: 200, deleteResult };
  } catch (error) {
    // Debugging purpose
    console.log(error);

    return { status: 400 };
  }
}
