// Define the SellItem type

interface SellItem {
  name: string;
  description: string;
  price: number;
  sellerId: number; // Assuming sellerId is the ID of the seller
  auctionId?: number; // Assuming auctionId is optional
}

interface Auction {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  sellerId: number;
  sellItemId: number;
  processed: boolean;
}

// Sample data for SellItem
export const sellItems: SellItem[] = [
  {
    name: "Enchanted Forest Tapestry",
    description:
      "Bring the magic of the forest into your home with this enchanting tapestry. Featuring lush greenery, wandering deer, and twinkling fireflies, this tapestry adds a touch of whimsy to any room.",
    price: 49.99,
    sellerId: 1, // Seller ID
  },
  {
    name: "Mystic Moon Pendant Light",
    description:
      "Illuminate your space with the mystical glow of the moon. This pendant light features a stunning crescent moon design crafted from brass with opal glass panels. Perfect for creating a celestial ambiance in your home.",
    price: 79.99,
    sellerId: 2, // Seller ID
  },
  {
    name: "Midnight Rose Velvet Sofa",
    description:
      "Indulge in luxurious comfort with this sumptuous velvet sofa. Upholstered in midnight black velvet with elegant rose motifs embroidered on the cushions, this sofa is a statement piece that exudes sophistication.",
    price: 999.99,
    sellerId: 3, // Seller ID
  },
  {
    name: "Whispering Willow Wind Chime",
    description:
      "Let the soothing melodies of nature fill your garden with this elegant wind chime. Featuring handcrafted aluminum chimes and a delicate willow branch design, this wind chime adds a harmonious touch to your outdoor oasis.",
    price: 29.99,
    sellerId: 4, // Seller ID
    auctionId: 1, // Auction ID (optional)
  },
  {
    name: "Sapphire Starry Night Rug",
    description:
      "Transform your floor into a starry night sky with this celestial-inspired rug. Hand-tufted from plush wool in shades of deep blue and shimmering silver, this rug adds a touch of celestial magic to your living space.",
    price: 149.99,
    sellerId: 5, // Seller ID
    auctionId: 1, // Auction ID (optional)
  },
  {
    name: "Vintage Wooden Chair",
    description:
      "Antique wooden chair with intricate carvings. Adds a touch of elegance to any room. Perfect for vintage-themed interiors.",
    price: 149.99,
    sellerId: 6, // Seller ID
    auctionId: 1, // Auction ID (optional)
  },
];

export const auctions: Auction[] = [
  {
    title: "Antique Furniture Auction",
    description:
      "Bid on a selection of exquisite antique furniture pieces from various periods.",
    startDate: new Date(), // Today's date
    endDate: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from current time
    sellerId: 1,
    sellItemId: 1,
    processed: false,
  },
  {
    title: "Art Auction: Modern Masterpieces",
    description:
      "Explore a curated collection of modern artworks by renowned artists.",
    startDate: new Date(), // Today's date
    endDate: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from current time
    sellerId: 2,
    sellItemId: 2,
    processed: false,
  },
  {
    title: "Vintage Wine Auction",
    description:
      "Discover rare and collectible wines from prestigious vineyards around the world.",
    startDate: new Date(), // Today's date
    endDate: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from current time
    sellerId: 3,
    sellItemId: 3,
    processed: false,
  },
  {
    title: "Rare Book Auction",
    description:
      "Browse a collection of rare and first edition books from around the world.",
    startDate: new Date(), // Today's date
    endDate: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes from current time
    sellerId: 4,
    sellItemId: 4,
    processed: false,
  },
  {
    title: "Jewelry Auction: Fine Gems and Diamonds",
    description:
      "Bid on exquisite jewelry pieces featuring fine gems and diamonds.",
    startDate: new Date(), // Today's date
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from today
    sellerId: 5,
    sellItemId: 5,
    processed: false,
  },
  {
    title: "Sports Memorabilia Auction",
    description:
      "Find rare sports memorabilia including autographed items, jerseys, and equipment.",
    startDate: new Date(), // Today's date
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from today
    sellerId: 6,
    sellItemId: 6,
    processed: false,
  },
];
