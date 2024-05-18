import { Job, Worker, QueueEvents } from "bullmq";
import { getSpecificSeller } from "../../../database/databaseController/sellerController/GetSpecificSeller";
import { AuctionManager } from "../../../manager/AuctionManager";
import { getSpecificBidder } from "../../../database/databaseController/bidderController/GetSpecificBidder";
import { processJob } from "./JobLogicProcessForInactive";

const con = {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
};

export function jobWorkerForInactiveQueue() {
  const queueEvents = new QueueEvents("inactiveAuctionQueue");

  const worker = new Worker("inactiveAuctionQueue", processJob, con);
  worker.on("error", (err) => {
    console.error(err);
  });
  queueEvents.on("completed", ({ jobId }) => {
    console.log(`Job ${jobId} completed `);
  });
  queueEvents.on("failed", ({ jobId }) => {
    console.log(`Job ${jobId} is not completed`);
  });

  queueEvents.on("progress", ({ jobId, data }) => {
    console.log(`Job ${jobId}  is ${data}`);
  });
}
