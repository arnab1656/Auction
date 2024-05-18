import { Queue, Worker, Job } from "bullmq";

const con = {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
};

// Create a new queue instance
const myQueue = new Queue("auctionForQueue", con);

export async function addJobToQueue(auction: any) {
  const job = await myQueue.add("auction", { data: auction });

  const l = await myQueue.getJobs();

  const len = l.length;

  console.log("len " + len);

  console.log(`Job with the id ${job.id} is added`);
}
