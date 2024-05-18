import { z } from "zod";
import { t } from "../../trpc";

import { createBid } from "../../../database/databaseController/bidController/BidCreate";

export const bidRoute = t.router({
  createBidRoute: t.procedure
    .input(
      z.object({
        amount: z.number(),
        auctionId: z.number(),
        bidderId: z.number(),
      })
    )
    .mutation(async (opts) => {
      console.log(opts.input);

      try {
        const res = await createBid(opts.input);

        return { res };
      } catch (res) {
        return res;
      }
    }),
});
