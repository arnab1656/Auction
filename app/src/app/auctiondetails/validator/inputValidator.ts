import { BidManager } from "@/manager/BidManager";
import { z } from "zod";

const bidManagerInstance = BidManager.getInstance();

// const { permit, IncrementalBidPrice, highestBid } =
//   bidManagerInstance.canBid(auctionId);

export const validateInput = (price: number, IncrementalBidPrice: number) => {
  // Define the schema for the input data
  const InputSchema = z.object({
    offer: z.number().min(IncrementalBidPrice),
  });

  try {
    InputSchema.parse({ offer: price });
    return { valid: true, error: null };
  } catch (error) {
    return { valid: false };
  }
};
