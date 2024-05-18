import { trpc } from "../_trpc/client";

export const clientFuncForTrpc = (auctionId: number) => {
  const { data, isFetching, isSuccess } =
    trpc.getSellItemFromAuction_IdRoute.useQuery({
      auctionId,
    });

  return { data, isFetching, isSuccess };
};

export const clientFuncForTrpcTwo = () => {
  const { data, mutate, isSuccess } = trpc.createBidRoute.useMutation();

  return { data, mutate, isSuccess };
};
