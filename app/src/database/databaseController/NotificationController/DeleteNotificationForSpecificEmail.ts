import prisma from "../../../postgres/prisma/prisma-client";

// Define the function to retrieve notifications by email
export const deleteNotificationsByEmail = async (email: string | undefined) => {
  try {
    // Retrieve notifications based on the provided email
    const deleteResult = await prisma.notification.deleteMany({
      where: {
        email,
      },
    });

    if (deleteResult.count > 0) {
      return {
        status: 200,
        message: `Successfully deleted ${deleteResult.count} notifications for email ${email}`,
      };
    } else {
      return {
        status: 404,
        message: `No notifications found for email ${email}`,
      };
    }
  } catch (err) {
    console.log(err);
    return {
      status: 401,
    };
  }
};
