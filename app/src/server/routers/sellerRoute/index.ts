import { z } from "zod";
import { t } from "../../trpc";

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// console.log("hi is " + hi);

import prisma from "../../../postgres/prisma/prisma-client";

import { createSeller } from "../../../database/databaseController/sellerController/SellerCreate";

export const sellerRouter = t.router({
  createSellerRoute: t.procedure
    .input(
      z.object({
        email: z.string(),
        userId: z.number().optional(),
      })
    )
    .mutation(async (opts) => {
      console.log(opts.input);

      try {
        const res = await createSeller(opts.input);
        return { res };
      } catch (res) {
        return { res };
      }
    }),
});
