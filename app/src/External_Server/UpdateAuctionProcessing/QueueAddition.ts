import { Queue } from "bullmq";
import { addJobToQueue } from "./ProviderToQueue/provider";

export const queueAdditionForAuctionData = async (input: any) => {
  // debug purpose
  // console.log("input");
  // console.log(input);

  input.map(async (auctionData: any) => {
    await addJobToQueue(auctionData)
      .then(() => {
        console.log("Succesfully executed the addAuctionToQueue");
      })
      .catch(() => {
        console.log("Not succesfully executed the addAuctionToQueue");
      });
  });

  // const queue = new Queue("auctionQueue");

  // // Get incomplete jobs from the queue
  // const incompleteJobs = await queue.getJobs([
  //   "waiting",
  //   "active",
  //   "delayed",
  //   "paused",
  // ]);

  // Log the incomplete jobs
  // console.log("Incomplete Jobs:");
  // console.log(incompleteJobs.map((job) => job.id));
};
