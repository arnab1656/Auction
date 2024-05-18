import { env } from "process";
import { auctionGet } from "../../database/databaseController/auctionController/AuctionGet";
import { addJobToQueue } from "./ProviderToQueue/provider";

export async function fetchingAuctionData() {
  // console.log("env from the 8080");
  // console.log(env);

  const response = await auctionGet();

  return response.allAuctions;
}
