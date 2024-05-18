import { TypeOf, number, object, string } from "zod";

export const createSellerItemSchema = object({
  name: string({ required_error: "Name is required" }),
  description: string({ required_error: "Email is required" }),
  price: number(),
  sellerId: number(),
});

// export const filterQuery = object({
//   limit: number().default(1),
//   page: number().default(10),
// });

export type CreateSellerItemInput = TypeOf<typeof createSellerItemSchema>;
// export type FilterQueryInput = TypeOf<typeof filterQuery>;
