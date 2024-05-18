// Define the Bid type
interface Bid {
  amount: number;
  bidderId: number; // Assuming bidderId is the ID of the bidder
  auctionId: number; // Assuming auctionId is the ID of the auction
}

// Sample data for Bid
export const bids: Bid[] = [
  {
    amount: 100,
    bidderId: 12, // Bidder ID
    auctionId: 1, // Auction ID
  },
  {
    amount: 150,
    bidderId: 15, // Bidder ID
    auctionId: 2, // Auction ID
  },
  {
    amount: 120,
    bidderId: 2, // Bidder ID
    auctionId: 3, // Auction ID
  },
  {
    amount: 200,
    bidderId: 9, // Bidder ID
    auctionId: 6, // Auction ID
  },
  {
    amount: 180,
    bidderId: 4, // Bidder ID
    auctionId: 5, // Auction ID
  },
  {
    amount: 220,
    bidderId: 17, // Bidder ID
    auctionId: 6, // Auction ID
  },
];
