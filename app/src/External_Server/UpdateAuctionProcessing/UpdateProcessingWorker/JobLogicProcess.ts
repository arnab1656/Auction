import { Job } from "bullmq";
import { auctionStatusUpdate } from "../../../database/databaseController/auctionController/AuctionStatusUpdate";

export const processJob = async (job: Job<any>) => {
  const data = job.data.data;
  //debug purpose

  // Get the current date
  const currentDate: Date = new Date();

  const currentDateTimestamp = currentDate.getTime();

  // const currentDateIST = currentDate.toLocaleString("en-IN", {
  //   timeZone: "Asia/Kolkata",
  // });

  //debug purpose

  // console.log("currentDate");
  // console.log(typeof currentDateTimestamp);

  const startDateTimestamp = Date.parse(data.startDate);
  // console.log("start");
  // console.log(typeof startDateTimestamp);

  const endDateTimestamp = Date.parse(data.endDate);
  // console.log("end");
  // console.log(typeof endDateTimestamp);

  // Check if the current date is greater than the starting date and less than the end date
  if (
    currentDateTimestamp >= startDateTimestamp &&
    currentDateTimestamp < endDateTimestamp
  ) {
    console.log("Status is active");

    // try {
    //   const res = await auctionStatusUpdate(data.id, true);

    //   console.log(res);
    // } catch (res) {
    //   console.log(res);
    // }

    const response = await auctionStatusUpdate(data.id, true);
    console.log(response);
  } else {
    console.log("Status is inactive");

    // try {
    //   const res = await auctionStatusUpdate(data.id, false);

    //   console.log(res);
    // } catch (res) {
    //   console.log(res);
    // }
    const response = await auctionStatusUpdate(data.id, false);
    console.log(response.status);
  }
};
