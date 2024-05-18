import prisma from "../../../postgres/prisma/prisma-client";

export const getNotificationsForUser = async (userId: number | undefined) => {
  try {
    // Retrieve notifications for the specified user
    const notifications = await prisma.notification_User.findMany({
      where: {
        userId,
      },
    });

    return {
      status: 200,
      notifications,
    };
  } catch (error) {
    console.error("Error retrieving notifications:", error);
    return {
      status: 500,
      message: "Internal server error",
    };
  }
};
