import { bidders } from "../../../database/databaseController/bidderController/bidderList";
import { trpc } from "../../_trpc/client";

export const bidderCreateSeedFunc = () => {
  const { data, mutate, isSuccess } = trpc.createBidderRoute.useMutation();

  return { data, mutate, isSuccess };
};
