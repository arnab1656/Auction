import { users } from "../userControlller/userList";

interface Bidder {
  email: string;
}

// Assuming 'bidders' is an array of Bidder objects

export const bidders: Bidder[] = users.map((user, index) => ({
  email: user.email,
  userId: index + 1,
}));
