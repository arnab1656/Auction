import { TypeOf, number, object, string, date, boolean } from "zod";

export const createAuctionSchema = object({
  sellItemId: number(),

  title: string({ required_error: "title is required" }),
  description: string({ required_error: "description is required" }),
  startDate: date(),
  endDate: date(),
  active: boolean(),
  processed: boolean(),
  sellerId: number().optional(),
});

// export const filterQuery = object({
//   limit: number().default(1),
//   page: number().default(10),
// });

export type CreateAuctionInput = TypeOf<typeof createAuctionSchema>;
// export type FilterQueryInput = TypeOf<typeof filterQuery>;
