import { t } from "../trpc";

import { userRoute } from "./userRoute";
import { bidderRoute } from "./bidderRoute";
import { sellerRouter } from "./sellerRoute";
import { sellItemRoute } from "./sellItemRoute";
import { bidRoute } from "./bidRoute";
import { auctionRoute } from "./auctionRoute";

export const appRouter = t.mergeRouters(
  userRoute,
  bidderRoute,
  sellerRouter,
  sellItemRoute,
  bidRoute,
  auctionRoute
);

export type AppRouter = typeof appRouter;
