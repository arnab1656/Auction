import prisma from "../../../postgres/prisma/prisma-client";

// Define the function to retrieve notifications by email
export const getNotificationsByEmail = async (email: string | undefined) => {
  try {
    // Retrieve notifications based on the provided email
    const notificationsForSpecificEmail = await prisma.notification.findMany({
      where: {
        email,
      },
    });

    return {
      status: 200,
      notificationsForSpecificEmail,
    };
  } catch (err) {
    console.log(err);
    return {
      status: 401,
    };
  }
};
