import { createServer } from "http";
import { Server } from "socket.io";
import { getSpecificSellerByEmail } from "../../database/databaseController/sellerController/GetSpecificSellerByEmail";

import { getSpecificBidderByEmail } from "../../database/databaseController/bidderController/GetSpecificBidderByEmail";

import { getNotificationsByEmail } from "../../database/databaseController/NotificationController/GetNotificationForSpecificEmail";

import { getSpecificUser } from "../../database/databaseController/userControlller/GetSpecificUser";

import { deleteNotificationsByEmail } from "../../database/databaseController/NotificationController/DeleteNotificationForSpecificEmail";

import { getNotificationsForUser } from "../../database/databaseController/Notificaton_UserController/GetNotificationForUser";

type Notification =
  | {
      id: number;
      message: string;
      createdAt: Date;
      userId: number;
    }[]
  | undefined;

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // Replace with your client's origin
    methods: ["GET", "POST"], // Add allowed HTTP methods if needed
  },
});

const PORT = 9000;

io.on("connection", (socket) => {
  console.log("A client connected");

  // Listen for authentication data from the client
  socket.on("authenticate", async (credentials) => {
    console.log("credentials.username");
    console.log(credentials.username);

    const response = await getSpecificUser(credentials.username);

    const userId = response.specificUser?.id;

    console.log("userId");
    console.log(userId);

    if (response.status === 200) {
      const NotificationResponseForUser = await getNotificationsForUser(userId);

      const notifications: Notification =
        NotificationResponseForUser.notifications;

      if (notifications?.length === 0) {
        socket.emit("notification", "There is no notifications");
      }

      socket.emit("notification", notifications);

      // await deleteNotificationsByEmail(bidderEmail);
    } else {
      console.error("Authentication failed");

      socket.disconnect();
    }
  });

  socket.on("disconnect", () => {
    console.log("A client disconnected");
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
