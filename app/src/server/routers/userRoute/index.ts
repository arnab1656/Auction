import { z } from "zod";
import { t } from "../../trpc";
import { createUser } from "../../../database/databaseController/userControlller/UserCreate";

import { PrismaClient } from "@prisma/client";
import { abort, env } from "process";

// const prisma = new PrismaClient();

// console.log("hi is " + hi);

export const userRoute = t.router({
  createUserRoute: t.procedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      try {
        const res = await createUser(opts.input);
        console.log(res);
        return { res };
      } catch (res) {
        console.log("The eerr is");
        console.log(res);
      }
    }),
});
