import { Job, Worker, QueueEvents, Queue } from "bullmq";
import { auctionStatusUpdate } from "../../../database/databaseController/auctionController/AuctionStatusUpdate";
import { processJob } from "./JobLogicProcess";

const con = {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
};

export async function jobWorkerForAuctionData() {
  const queueEvents = new QueueEvents("auctionForQueue");

  // const myqueue = new Queue("auctionQueue");

  const worker = new Worker("auctionForQueue", processJob, con);

  worker.on("error", (err) => {
    console.error(err);
  });
  worker.on("completed", async (job) => {
    console.log(`Job ${job.id} completed `);
  });

  worker.on("failed", (err) => {
    console.error(err);
  });
  // queueEvents.on("completed", ({ jobId }) => {
  //   console.log(`Job ${jobId} completed `);
  // });
  queueEvents.on("failed", ({ jobId }) => {
    console.log(`Job ${jobId} is not completed`);
  });

  queueEvents.on("progress", ({ jobId, data }) => {
    console.log(`Job ${jobId} is ${data}`);
  });
}
