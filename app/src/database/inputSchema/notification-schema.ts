import { TypeOf, object, string, date } from "zod";

export const notificationSchema = object({
  message: string(),
  email: string(),
});

export type NotificationInput = TypeOf<typeof notificationSchema>;
