import prisma from "../../../postgres/prisma/prisma-client";
import type { NotificationInput } from "../../inputSchema/notification-schema";

export const notificationCreate = async (input: NotificationInput) => {
  try {
    const newNotification = await prisma.notification.create({
      data: input,
    });

    return {
      status: 200,
      newNotification,
    };
  } catch (err: any) {
    console.log(err);
    return {
      status: 401,
    };
  }
};
