import prisma from "../../../postgres/prisma/prisma-client";

export const getSpecificUser = async (email: string) => {
  try {
    const specificUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (specificUser) {
      return { status: 200, specificUser };
    } else {
      return { status: 404 };
    }
  } catch (err: any) {
    // Debugging purpose

    console.error(err);

    return { status: 500 };
  }
};
