import { users } from "../../../database/databaseController/userControlller/userList";
import { trpc } from "../../_trpc/client";

export const userCreateSeedFunc = () => {
  const { data, mutate, isSuccess } = trpc.createUserRoute.useMutation();

  return { data, mutate, isSuccess };
};
