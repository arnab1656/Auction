import prisma from "../../../postgres/prisma/prisma-client";

import type { CreateSellerInput } from "../../inputSchema/seller-schema";

// import { PrismaClient, Prisma } from "@prisma/client";

// const prisma = new PrismaClient();

export const createSeller = async (input: CreateSellerInput) => {
  try {
    const newSeller = await prisma.seller.create({
      data: {
        email: input.email,
      },
    });

    return {
      status: 200,
      newSeller,
    };
  } catch (err) {
    console.log(err);

    return {
      status: 400,
    };
  }
};
