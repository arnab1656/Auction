import prisma from "../../../postgres/prisma/prisma-client";
import type { CreateSellerItemInput } from "../../inputSchema/sellItem-schema";

export const getSellItemDetails = async (sellItemID: number | undefined) => {
  try {
    const foundItem = await prisma.sellItem.findUnique({
      where: {
        id: sellItemID,
      },
    });

    if (foundItem)
      return {
        status: 200,
        foundItem,
      };
    else {
      return {
        status: 404,
      };
    }
  } catch (err: any) {
    console.log(err);
    return { status: 500 };
  }
};
