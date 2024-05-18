import { trpc } from "../../_trpc/client";

export const bidCreateSeedFunc = () => {
  const { data, mutate, isSuccess } = trpc.createBid.useMutation();

  return { data, mutate, isSuccess };
};
