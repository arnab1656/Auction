import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
  name: string({ required_error: "Name is required" }),
  email: string({ required_error: "Email is required" }).email("Invalid email"),
  password: string(),
});

export const getUserSchema = object({
  email: string({ required_error: "Email is required" }).email("Invalid email"),
  password: string({ required_error: "Password is required" }),
});

// export const filterQuery = object({
//   limit: number().default(1),
//   page: number().default(10),
// });

export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type GetUserInput = TypeOf<typeof getUserSchema>;
// export type FilterQueryInput = TypeOf<typeof filterQuery>;
