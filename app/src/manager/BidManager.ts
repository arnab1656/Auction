import { env } from "process";
import { trpc } from "../app/_trpc/client";

export class BidManager {
  private static instance: BidManager;
  private bids: [];
  private auctionDetails: {};
  private sellItem: {};
  private price: number;

  constructor() {
    this.bids = [];
    this.auctionDetails = {};
    this.sellItem = {};
    this.price = 0;
  }

  static getInstance(): BidManager {
    if (!BidManager.instance) {
      BidManager.instance = new BidManager();
    }
    return BidManager.instance;
  }

  showDetails() {
    console.log("show bids");
    console.log(this.bids);

    console.log("show AuctionDetails");
    console.log(this.AuctionDetails);
  }

  getBidDetails(auctionId: number) {
    console.log("getBidDetails And I am called");

    const { data, isFetching, isSuccess } =
      trpc.getAuctionBidDetailsRoute.useQuery({
        auctionId,
      });

    if (isFetching) {
      console.log("wait for result");
    } else {
      console.log("got the result data");

      console.log(data.bids);
      this.bids = data.bids;
    }

    const {
      data: sepcificAuctionData,
      isFetching: auctionFetching,
      isSuccess: auctionSuccess,
    } = trpc.getSpecificAuctionRoute.useQuery({
      auctionId,
    });

    if (auctionFetching) {
      console.log("wait for result");
    } else {
      console.log("got the auction Specifics");

      this.auctionDetails = sepcificAuctionData?.res.specificAuction;
      console.log(this.auctionDetails);
    }

    const {
      data: sellItemData,
      isFetching: sellItemFetching,
      isSuccess: sellItemSuccess,
    } = trpc.getSellItemFromAuction_IdRoute.useQuery({ auctionId });

    if (sellItemFetching) {
      console.log("wait for result");
    } else {
      console.log("got the price");
      this.sellItem = sellItemData.foundItem;
      this.price = this.sellItem.price;
      console.log(this.price);
    }
  }
  calHigestBid() {
    let maxBid;
    // If there are no bids, return an example initial bid amount
    if (this.bids.length === 0) {
      const maxBid = this.price;

      console.log("maxBid from if");
      console.log(maxBid);

      return maxBid;
    } else {
      maxBid = Math.max(...this.bids.map((bid) => bid.amount));

      console.log("maxBid from else");
      console.log(maxBid);

      return maxBid;
    }
  }

  calculateIncrementalBidPrice(): number {
    // Calculate the highest bid amount

    const highestBidAmount = this.calHigestBid();

    // console.log("highestBidAmount");
    // console.log(highestBidAmount);

    // Calculate the incremental bid price (5% higher than the highest bid)

    const incrementPercentage = 0.05; // 5%
    const incrementAmount = highestBidAmount * incrementPercentage;
    const incrementalBidPrice = highestBidAmount + incrementAmount;

    // console.log("incrementalBidPrice");
    // console.log(incrementalBidPrice);

    return incrementalBidPrice;
  }

  isAuctionActive(): boolean {
    const currentDate = new Date();
    const startDate = this.auctionDetails.startDate;
    const endDate = this.auctionDetails.endDate;

    // Check if the current date is between the start and end dates of the auction
    return currentDate >= startDate && currentDate <= endDate;
  }

  canBid(auctionId: number): {
    permit: boolean;
    highestBid?: number | null;
    IncrementalBidPrice?: number | null;
  } {
    this.getBidDetails(auctionId);

    const permit = this.isAuctionActive();

    if (permit) {
      const highestBid = this.calHigestBid();

      const IncrementalBidPrice = this.calculateIncrementalBidPrice();

      return { permit, highestBid, IncrementalBidPrice };
    }
    return { permit, highestBid: null, IncrementalBidPrice: null };
  }
}

// Example usage
export function main() {
  const bidManagerInstance = BidManager.getInstance();
  // bidManagerInstance.getBidDetails(10);
  // bidManagerInstance.calHigestBid();
  // bidManagerInstance.calculateIncrementalBidPrice();

  // bidManagerInstance.isAuctionActive();

  const { permit, IncrementalBidPrice, highestBid } =
    bidManagerInstance.canBid(13);

  console.log("{ permit, calculateIncrementalBidPrice, highestBid }");
  console.log({ permit, IncrementalBidPrice, highestBid });
}
