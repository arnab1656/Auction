import { trpc } from "../../_trpc/client";

export const auctionGetSeedFunc = () => {
  const { data, isSuccess } = trpc.getAuctionRoute.useQuery();

  return { data, isSuccess };
};
