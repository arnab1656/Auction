import { TypeOf, number, object, string } from "zod";

export const createBidSchema = object({
  amount: number({ required_error: "Name is required" }),
  bidderId: number(),
  auctionId: number(),
});

// export const filterQuery = object({
//   limit: number().default(1),
//   page: number().default(10),
// });

export type CreateBidInput = TypeOf<typeof createBidSchema>;
// export type FilterQueryInput = TypeOf<typeof filterQuery>;
