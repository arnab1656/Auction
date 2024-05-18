import { io, Socket } from "socket.io-client";
import { auctionGet } from "../../database/databaseController/auctionController/AuctionGet";
import { env } from "process";
import { jobWorkerForAuctionData } from "../UpdateAuctionProcessing/UpdateProcessingWorker/JobWorker";

// Socket.IO server URL
const socketServerUrl = "http://localhost:8000";

// Connect to the Socket.IO server
const socket: Socket = io(socketServerUrl);

// Socket.IO connection event
socket.on("connect", () => {
  console.log("Connected to Socket.IO server");

  // Send a message to the server every minute
  setInterval(emitter, 60000); // 60000 milliseconds = 1 minute
});

// Function to send a message to the server
function emitter() {
  console.log("Poking the ws server for to start the operation");
  socket.emit("operation_For_Auction_Status_Check");
}

// Socket.IO message event
socket.on("message", (message: string) => {
  console.log("Received message from server", message);
});

// Socket.IO disconnect event
socket.on("disconnect", () => {
  console.log("Disconnected from Socket.IO server");
});
