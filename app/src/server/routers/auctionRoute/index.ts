import { z } from "zod";
import { t } from "../../trpc";

import { auctionGet } from "../../../database/databaseController/auctionController/AuctionGet";
import { getSpecificAuction } from "../../../database/databaseController/auctionController/GetSpecificAuction";
import { getSellItemDetails } from "../../../database/databaseController/sellItemController/GetSellItemDetails";
import { getAuctionWithBidDetails } from "../../../database/databaseController/auctionController/GetAuctionBidDetails";
import { auctionStatusUpdate } from "../../../database/databaseController/auctionController/AuctionStatusUpdate";

export const auctionRoute = t.router({
  getAuctionRoute: t.procedure.query(async (opts) => {
    try {
      const res = await auctionGet();
      return { res };
    } catch (res) {
      return { res };
    }
  }),

  UpdateAuctionStatusRoute: t.procedure
    .input(
      z.object({
        auctionId: z.number(),
        status: z.boolean(),
      })
    )
    .query(async (opts) => {
      try {
        const res = await auctionStatusUpdate(
          opts.input.auctionId,
          opts.input.status
        );
        return { res };
      } catch (res) {
        return { res };
      }
    }),

  getSpecificAuctionRoute: t.procedure
    .input(
      z.object({
        auctionId: z.number(),
      })
    )
    .query(async (opts) => {
      try {
        const res = await getSpecificAuction(opts.input.auctionId);
        return { res };
      } catch (res) {
        return { res };
      }
    }),

  //extracting sellItem from auctionId route...
  getSellItemFromAuction_IdRoute: t.procedure
    .input(
      z.object({
        auctionId: z.number(),
      })
    )
    .query(async (opts) => {
      try {
        const foundAuction = await getSpecificAuction(opts.input.auctionId);

        if (foundAuction) {
          console.log("res");

          console.log(foundAuction.specificAuction?.sellItemId);

          const sellItemId = foundAuction.specificAuction?.sellItemId;

          const foundsellItem = await getSellItemDetails(sellItemId);

          const res = {
            ...foundsellItem,
          };

          return res;
        } else {
          return { status: 404 };
        }
      } catch (res) {
        return { res };
      }
    }),

  //Extract only bid details from the auctionId

  getAuctionBidDetailsRoute: t.procedure
    .input(
      z.object({
        auctionId: z.number(),
      })
    )
    .query(async (opts) => {
      try {
        const foundAuctionBid = await getAuctionWithBidDetails(
          opts.input.auctionId
        );

        console.log("foundAuction");
        console.log(foundAuctionBid);

        const res = {
          ...foundAuctionBid,
        };

        return res;
        // } else {
        //   return { status: 404, message: "not found auctionItem" };
        // }
      } catch (res) {
        // return { res };
        console.error("foundAuction not found");
      }
    }),
});
