import { auctions } from "@/database/databaseController/sellItemController/list";
import { trpc } from "../../_trpc/client";

export const auctionCreateSeedFunc = () => {
  const { data, mutate, isSuccess } =
    trpc.SellItemForAuctionRoute.useMutation();

  return { data, mutate, isSuccess };
};
