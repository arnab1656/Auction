import { TypeOf, number, object, string } from "zod";

export const createSellerSchema = object({
  email: string({ required_error: "Email is required" }),
  userId: number().optional(),
});

// export const filterQuery = object({
//   limit: number().default(1),
//   page: number().default(10),
// });

export type CreateSellerInput = TypeOf<typeof createSellerSchema>;
// export type FilterQueryInput = TypeOf<typeof filterQuery>;
