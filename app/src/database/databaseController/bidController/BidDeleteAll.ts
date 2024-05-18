import prisma from "../../../postgres/prisma/prisma-client";

export const bidDeleteAll = async () => {
  try {
    // Delete all rows from the Bid table
    const deleteResult = await prisma.bid.deleteMany();

    // Check if any rows were deleted
    if (deleteResult.count > 0) {
      return { status: 200, message: `${deleteResult.count} bids deleted` };
    } else {
      return { status: 404, message: "No bids found to delete" };
    }
  } catch (err: any) {
    // Handle errors
    console.error("Error deleting bids:", err);
    return { status: 500, message: "Internal server error" };
  }
};
