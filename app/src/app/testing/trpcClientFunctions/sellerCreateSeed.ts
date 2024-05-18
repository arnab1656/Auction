import { sellers } from "../../../database/databaseController/sellerController/sellerList";
import { trpc } from "../../_trpc/client";

export const sellerCreateSeedFunc = () => {
  const { data, mutate, isSuccess } = trpc.createSellerRoute.useMutation();

  return { data, mutate, isSuccess };
};
