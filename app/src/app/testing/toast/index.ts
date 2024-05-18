import { Queue } from "bullmq";
import { trpc } from "../../_trpc/client";
import { auctionGetSeedFunc } from "../trpcClientFunctions/auctionGetSeedFunc";

import { auctionGet } from "../../../database/databaseController/auctionController/AuctionGet";

const myQueue = new Queue("check-status", {
  connection: {
    host: "127.0.0.1",
    port: 6379,
  },
});

export async function addJobs() {
  // const job1 = await myQueue.add("myJobName", { foo: "bar" });
  // const job2 = await myQueue.add("myJobName", { qux: "baz" });
  // console.log("added to the queue", job1.id);
  // console.log("added to the queue", job2.id);
  const { data, isSuccess } = auctionGetSeedFunc();
  console.log("data");
  console.log(data);

  // auctionGet().then((data) => {
  //   console.log("data");
  //   console.log(data);
  // });
}

addJobs();

// const timeTaken = () => {
//   return new Promise((resolve) => setTimeout(resolve, 5000));
// };

// import { Worker } from "bullmq";

// const worker = new Worker(
//   "check-status",
//   async (job) => {
//     console.log("job rec id is", job.id);
//     console.log("Processing job is");

//     console.log("got the data  from the job");
//     console.log(job.data);
//     await timeTaken();

//     console.log("The work is done for the -->" + job.id);
//   },
//   {
//     connection: {
//       host: "127.0.0.1",
//       port: 6379,
//     },
//   }
// );
