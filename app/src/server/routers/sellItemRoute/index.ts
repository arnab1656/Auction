import { z } from "zod";
import { t } from "../../trpc";
import { sellForAuction } from "../../../database/databaseController/sellItemController/SellForAuction";
import { createSellItem } from "../../../database/databaseController/sellItemController/SellItemCreate";
import { getSellItemDetails } from "../../../database/databaseController/sellItemController/GetSellItemDetails";

import { env } from "process";

export const sellItemRoute = t.router({
  createSellItemRoute: t.procedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        sellerId: z.number(),
      })
    )
    .mutation(async (opts) => {
      console.log(opts.input);

      try {
        const res = await createSellItem(opts.input);
        console.log(res);
        return { res };
      } catch (err) {
        console.log("The eerr is");
        return { err };
      }
    }),

  SellItemForAuctionRoute: t.procedure
    .input(
      z.object({
        sellItemId: z.number(),
        title: z.string(),
        description: z.string(),
        startDate: z.date(),
        endDate: z.date(),
        sellerId: z.number().optional(),
        active: z.boolean(),
        processed: z.boolean(),
      })
    )
    .mutation(async (opts) => {
      try {
        const res = await sellForAuction(opts.input);
        console.log(res);
        return { res };
      } catch (res) {
        return { res };
      }
    }),

  getSellItemRoute: t.procedure
    .input(
      z.object({
        sellItemId: z.number(),
      })
    )
    .query(async (opts) => {
      try {
        const res = await getSellItemDetails(opts.input.sellItemId);
        console.log(res);
        return { res };
      } catch (res) {
        console.log("The err is");
        return { res };
      }
    }),
});
