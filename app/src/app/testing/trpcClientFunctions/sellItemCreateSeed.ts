import { sellItems } from "@/database/databaseController/sellItemController/list";
import { trpc } from "../../_trpc/client";

export const sellItemCreateSeedFunc = () => {
  const { data, mutate, isSuccess } = trpc.createSellItemRoute.useMutation();

  return { data, mutate, isSuccess };
};
