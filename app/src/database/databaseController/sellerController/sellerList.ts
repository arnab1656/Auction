import { users } from "../userControlller/userList";

interface Seller {
  email: string;
  userId: number;
}

export const sellers: Seller[] = users.map((user, index) => ({
  email: user.email,
  userId: index + 1,
}));
