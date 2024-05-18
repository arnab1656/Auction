import { auctions } from "../../../database/databaseController/sellItemController/list";
import { trpc } from "../../_trpc/client";

export const getAuctionBidDetailsSeed = (auctionId: number) => {
  const { data, isFetching, isSuccess } =
    trpc.getAuctionBidDetailsRoute.useQuery({
      auctionId,
    });

  console.log("data from contr");
  console.log(data);

  return { data, isFetching, isSuccess };
};
