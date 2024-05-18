import Bull from "bull";

// Create a Redis connection
const redisConfig = {
  host: "127.0.0.1",
  port: 6379,
};

// Create a Bull queue instance
const myQueue = new Bull("check-status", { redis: redisConfig });

// Add a job to the queue
async function addJob() {
  await myQueue.add({ foo: "bar" });
  console.log("Job added to the queue");
}

addJob();

// myQueue.process(async (job) => {
//   console.log("Processing job:", job.id);

//   // Implement your job processing logic here

//   // For example, simulate some work
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   console.log("Job", job.id, "processed");
// });
