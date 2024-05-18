import { TypeOf, object, string, number } from "zod";

export const notificationSchema = object({
  message: string(),
  userId: number(),
});

export type NotificationUserInput = TypeOf<typeof notificationSchema>;
