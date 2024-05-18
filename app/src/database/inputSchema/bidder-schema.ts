import { TypeOf, number, object, string } from "zod";

export const createBidderSchema = object({
  email: string({ required_error: "Email is required" }).email("Invalid email"),
  userId: number().optional(),
});

// export const filterQuery = object({
//   limit: number().default(1),
//   page: number().default(10),
// });

export type CreateBidderInput = TypeOf<typeof createBidderSchema>;
// export type FilterQueryInput = TypeOf<typeof filterQuery>;
