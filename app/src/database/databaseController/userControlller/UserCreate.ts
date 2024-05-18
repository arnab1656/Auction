import prisma from "../../../postgres/prisma/prisma-client";
import type { CreateUserInput } from "../../inputSchema/user-schema";

export const createUser = async (input: CreateUserInput) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
      },
    });

    return {
      status: 200,
      newUser,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 400,
    };
  }
};
