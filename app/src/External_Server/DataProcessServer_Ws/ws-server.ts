import http from "http";
import { Server } from "socket.io";
import { addJobToQueue } from "../UpdateAuctionProcessing/ProviderToQueue/provider";
import { jobWorkerForInactiveQueue } from "../InactiveDataProcess/ProcessWorker/JobWorkerForInactive";
import { jobWorkerForAuctionData } from "../UpdateAuctionProcessing/UpdateProcessingWorker/JobWorker";
import { auctionGet } from "../../database/databaseController/auctionController/AuctionGet";
import { getInactiveAuction } from "../../database/databaseController/auctionController/GetInactiveAuction";
import { env } from "process";
import { auctionDataDelete } from "../../database/databaseController/auctionController/AuctionDelete";
import { fetchInactiveData } from "../InactiveDataProcess/FetchInactiveData";
import { queueAdditionForInactiveAuction } from "../InactiveDataProcess/QueueAddition";
import { fetchingAuctionData } from "../UpdateAuctionProcessing/FetchingAuctionData";
import { queueAdditionForAuctionData } from "../UpdateAuctionProcessing/QueueAddition";
import { bidDeleteAll } from "../../database/databaseController/bidController/BidDeleteAll";

// Create an HTTP server
const server = http.createServer();

// Create a Socket.IO server
const io = new Server(server);

// Socket.IO connection event
io.on("connection", (socket) => {
  console.log("Client connected " + socket.id);

  // Socket.IO message event
  socket.on("operation_For_Auction_Status_Check", async () => {
    console.log(
      "Operation for the fetching and processing auction status started"
    );

    const auctionData = await fetchingAuctionData();

    // console.log("auctionData");
    // console.log(auctionData);

    await queueAdditionForAuctionData(auctionData);

    await jobWorkerForAuctionData();

    // Echo msg to the client...
    socket.send(
      "Operation is done and notified to you because you are the client"
    );
  });

  // Socket.IO message event
  socket.on("req_for_inactive_data", async () => {
    // const response = await getInactiveAuction();

    const lastSevenDaysInactiveAuctions = await fetchInactiveData();

    console.log("response");
    console.log(lastSevenDaysInactiveAuctions);

    queueAdditionForInactiveAuction(lastSevenDaysInactiveAuctions);

    jobWorkerForInactiveQueue();

    // socket.send(response);
  });

  socket.on("req_for_delete_auction_data", async () => {
    const response2 = await bidDeleteAll();
    const response = await auctionDataDelete();

    socket.send(response, "     ", response2);
  });

  // Socket.IO disconnect event
  socket.on("disconnect", () => {
    console.log("Client disconnected " + socket.id);
  });
});

// Start the HTTP server on port 8080
server.listen(8000, () => {
  console.log("Socket.IO server started on port 8000");
});
