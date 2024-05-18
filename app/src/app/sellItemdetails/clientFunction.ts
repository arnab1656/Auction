import { trpc } from "../_trpc/client";

export const clientFunc = () => {
  const { data, mutate, isSuccess } =
    trpc.SellItemForAuctionRoute.useMutation();

  return { data, mutate, isSuccess };
};
