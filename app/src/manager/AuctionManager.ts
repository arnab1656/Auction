//Initial work of the auciton manager is to determine the auction winner

import { number } from "zod";
import { trpc } from "../app/_trpc/client";

import { auctionGet } from "../database/databaseController/auctionController/AuctionGet";
import { getAuctionWithBidDetails } from "../database/databaseController/auctionController/GetAuctionBidDetails";
import { getSpecificAuction } from "../database/databaseController/auctionController/GetSpecificAuction";
import { getSellItemDetails } from "../database/databaseController/sellItemController/GetSellItemDetails";

// const redisConfig = {
//   host: "127.0.0.1",
//   port: 6379,
// };

// const myQueue = new Bull("check-status", { redis: redisConfig });

interface Bid {
  id: number;
  amount: number;
  bidderId: number;
  auctionId: number;
}

interface Auction {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  sellItemId: number | null;
}

export class AuctionManager {
  private static instance: AuctionManager;
  private bids: Bid[];
  private auctions: Auction[];
  private sellerId: number | null;

  constructor() {
    this.bids = [];
    this.auctions = [];
    this.sellerId = null;
  }

  static getInstance(): AuctionManager {
    if (!AuctionManager.instance) {
      AuctionManager.instance = new AuctionManager();
    }
    return AuctionManager.instance;
  }

  async getAuctionDetails(auctionId: number) {
    const repsonseForSpecificAuction = await getSpecificAuction(auctionId);

    // console.log("repsonseForSpecificAuction");
    // console.log(repsonseForSpecificAuction);

    const sellItemId = repsonseForSpecificAuction.specificAuction?.sellItemId;

    // console.log("sellItemId");
    // console.log(sellItemId);

    const repsonseForSellItemDetails = await getSellItemDetails(sellItemId);

    // console.log("repsonseForSellItemDetails seller");
    // console.log(repsonseForSellItemDetails.foundItem?.sellerId);

    this.sellerId =
      repsonseForSellItemDetails.foundItem?.sellerId === undefined
        ? null
        : repsonseForSellItemDetails.foundItem?.sellerId;

    const result = await getAuctionWithBidDetails(auctionId);

    if (result.bids === undefined)
      console.log("this.bids from the getAuctionDetails is undefined");
    else {
      if (result.bids?.length === 0) {
        console.log("No bids on this auction so its a zero-bid-auction");
        this.bids = [];
      } else {
        this.bids = result.bids;
        console.log("this.bids from the getAuctionDetails");
        console.log(this.bids);
        // console.log(result);
      }
    }
  }

  determineWinningBid(): Bid | null {
    if (this.bids?.length === 0) {
      return null; // No bids, no winner
    }

    // Sort bids by amount in descending order
    const sortedBids = this.bids.sort((a, b) => b.amount - a.amount);

    const highestBid = sortedBids[0];

    return highestBid;
  }

  determineHighestBidderAndSeller(): {
    bidderId: number | null;
    sellerId: number | null;
  } {
    let highestBidder = this.determineWinningBid();

    if (!highestBidder) {
      console.log("No bid on this auction");
      return { bidderId: null, sellerId: null };
    }

    const highestBidderId = highestBidder.bidderId;

    // console.log("sellerid is --->");
    // console.log(this.sellerId);

    // console.log("highestBidder id is --->");
    // console.log(highestBidderId);

    return { bidderId: highestBidderId, sellerId: this.sellerId };
  }
}

export function mainAuction(auctionId: number) {
  // const auctionManagerInstance = AuctionManager.getInstance();
  // auctionManagerInstance.retrieveAllAuctionsFromDB();
  // auctionManagerInstance.addJobs();
  // auctionManagerInstance.getAuctionDetails(auctionId);
  // auctionManagerInstance.startAuctionMonitoring(18);
  // auctionManagerInstance.startAuctionMonitoring();
}
