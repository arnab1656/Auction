import prisma from "../../../postgres/prisma/prisma-client";

export const getSpecificSeller = async (id: number) => {
  try {
    const specificSeller = await prisma.seller.findUnique({
      where: {
        id,
      },
    });

    if (specificSeller) {
      return { status: 200, specificSeller };
    } else {
      return { status: 404 };
    }
  } catch (err: any) {
    // Debugging purpose

    console.error(err);

    return { status: 500 };
  }
};
