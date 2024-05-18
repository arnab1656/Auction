import prisma from "../../../postgres/prisma/prisma-client";
import type { NotificationUserInput } from "../../inputSchema/notification-User-Schema";

export const createNotificationForUser = async (
  input: NotificationUserInput
) => {
  try {
    const newNotificationForUser = await prisma.notification_User.create({
      data: input,
    });

    return {
      status: 200,
      newNotificationForUser,
    };
  } catch (err: any) {
    console.log(err);
    return {
      status: 401,
    };
  }
};
