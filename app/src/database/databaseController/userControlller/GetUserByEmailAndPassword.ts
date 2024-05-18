import prisma from "../../../postgres/prisma/prisma-client";

import crypto from "crypto";
import { GetUserInput } from "../../inputSchema/user-schema";

// Function to retrieve a user by email and password

export const getUserByEmailAndPassword = async (input: GetUserInput) => {
  // Find the user by email

  try {
    const specificUser = await prisma.user.findUnique({
      where: {
        email: input.email,
      },
    });

    console.log("specificUser");
    console.log(specificUser);

    if (!specificUser) {
      return null;
    }

    if (specificUser) {
      if (input.password === specificUser?.password) {
        return specificUser;
      } else {
        return null;
      }
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
