import { trpc } from "../_trpc/client";

export const clientFunc = () => {
  const { data, isSuccess, isFetching } = trpc.getAuctionRoute.useQuery();

  return { data, isSuccess, isFetching };
};
