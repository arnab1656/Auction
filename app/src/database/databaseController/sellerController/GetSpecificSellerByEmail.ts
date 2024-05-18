import prisma from "../../../postgres/prisma/prisma-client";

export const getSpecificSellerByEmail = async (email: string) => {
  try {
    const specificSeller = await prisma.seller.findUnique({
      where: {
        email,
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
