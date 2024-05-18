import { io, Socket } from "socket.io-client";
import { addJobToQueue } from "../UpdateAuctionProcessing/ProviderToQueue/provider";
import { auctionGet } from "../../database/databaseController/auctionController/AuctionGet";
import { env } from "process";
import { jobWorkerForAuctionData } from "../UpdateAuctionProcessing/UpdateProcessingWorker/JobWorker";

var lastSevenDaysInactiveAuctions: [];

// Socket.IO server URL
const socketServerUrl = "http://localhost:8000";

// Connect to the Socket.IO server
const socket: Socket = io(socketServerUrl);

// Socket.IO connection event
socket.on("connect", () => {
  console.log("Connected to Socket.IO server from the client 2");

  inactiveAuction();
  // deleteAuction();
});

// Function to send a message to the server

function inactiveAuction() {
  console.log("requesting inactive auction data...");
  socket.emit("req_for_inactive_data");
}

function deleteAuction() {
  console.log("requesting inactive auction data...");
  socket.emit("req_for_delete_auction_data");
}
// Socket.IO message event
socket.on("message", (data: { status: number; recentInactiveAuctions: [] }) => {
  console.log("Received message from server");
  // console.log(data.recentInactiveAuctions);

  lastSevenDaysInactiveAuctions = data.recentInactiveAuctions;
  console.log(lastSevenDaysInactiveAuctions);
});

// Socket.IO disconnect event
socket.on("disconnect", () => {
  console.log("Disconnected from Socket.IO server");
});
