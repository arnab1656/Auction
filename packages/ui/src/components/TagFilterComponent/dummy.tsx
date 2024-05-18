export const auctionCategories = [
  "Art",
  "Real Estate",
  "Automobiles",
  "Collectibles",
  "Technology",
];

export const auctions = [
  { title: "Art Auction", endDate: "2024-04-30" },
  { title: "Real Estate Auction", endDate: "2024-05-15" },
  { title: "Automobiles Auction", endDate: "2024-05-10" },
  { title: "Collectibles Auction", endDate: "2024-05-20" },
  { title: "Technology Auction", endDate: "2024-05-05" },
  { title: "Fashion Auction", endDate: "2024-05-25" },
];

export const categoriesList = [
  {
    category: "Art",
    auctions: [
      { title: "Art Auction", endDate: "2024-04-30" },
      { title: "Real Estate Auction", endDate: "2024-05-15" },
      { title: "Automobiles Auction", endDate: "2024-05-10" },
      { title: "Collectibles Auction", endDate: "2024-05-20" },
    ],
  },
  {
    category: "Real Estate",
    auctions: [
      { title: "Art Auction", endDate: "2024-04-30" },
      { title: "Real Estate Auction", endDate: "2024-05-15" },
    ],
  },
  {
    category: "Automobiles",
    auctions: [{ title: "Art Auction", endDate: "2024-04-30" }],
  },
  {
    category: "Collectibles",
    auctions: [
      { title: "Collectibles1", endDate: "2024-04-30" },
      { title: "Collectibles2", endDate: "2024-05-15" },
      { title: "Collectibles3", endDate: "2024-05-10" },
      { title: "Collectible4", endDate: "2024-05-20" },
      { title: "Collectibles5", endDate: "2024-05-05" },
      { title: "Collectibles6", endDate: "2024-05-25" },
    ],
  },
  {
    category: "Technology",
    auctions: [
      { title: "Art Auction", endDate: "2024-04-30" },
      { title: "Real Estate Auction", endDate: "2024-05-15" },
      { title: "Automobiles Auction", endDate: "2024-05-10" },
      { title: "Collectibles Auction", endDate: "2024-05-20" },
      { title: "Technology Auction", endDate: "2024-05-05" },
      { title: "Fashion Auction", endDate: "2024-05-25" },
    ],
  },
];

const randomIndex = Math.floor(Math.random() * categoriesList.length);

// Retrieve the object at the random index
export const randomObject: {
  category: string;
  auctions: {
    title: string;
    endDate: string;
  }[];
} = categoriesList[randomIndex];

if (randomObject) {
  // Use randomObject safely here
} else {
  // Handle the case where randomObject is undefined
}
