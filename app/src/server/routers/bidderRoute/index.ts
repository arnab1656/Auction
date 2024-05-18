import { z } from "zod";
import { t } from "../../trpc";

// console.log("hi is " + hi);

import { createBidder } from "../../../database/databaseController/bidderController/BidderCreate";

export const bidderRoute = t.router({
  createBidderRoute: t.procedure
    .input(
      z.object({
        email: z.string(),
        userId: z.number().optional(),
      })
    )
    .mutation(async (opts) => {
      console.log(opts.input);

      try {
        const res = await createBidder(opts.input);

        return { res };
      } catch (res) {
        return { res };
      }
    }),
});
