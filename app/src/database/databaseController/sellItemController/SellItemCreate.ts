import prisma from "../../../postgres/prisma/prisma-client";
import type { CreateSellerItemInput } from "../../inputSchema/sellItem-schema";

export const createSellItem = async (input: CreateSellerItemInput) => {
  try {
    const newItem = await prisma.sellItem.create({
      data: input,
    });

    return {
      status: 200,
      newItem,
    };
  } catch (err: any) {
    return { status: 400 };
  }
};
