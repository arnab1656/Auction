import { Queue, Worker, Job } from "bullmq";

const con = {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
};

// Create a new queue instance
const myQueue = new Queue("inactiveAuctionQueue", con);

export async function addInactiveAuctionToQueue(auction: any) {
  const job = await myQueue.add("inactiveAuction", { data: auction });

  console.log(`Job with the id ${job.id} is added`);
}
