import prisma from "../../../postgres/prisma/prisma-client";

export const getSellerEmailById = async (id: number) => {
  try {
    const specificSellerEmail = await prisma.seller.findUnique({
      where: {
        id,
      },
    });

    if (specificSellerEmail) {
      return { status: 200, specificSellerEmail };
    } else {
      return { status: 404 };
    }
  } catch (err: any) {
    // Debugging purpose

    console.error(err);

    return { status: 500 };
  }
};
