import { type NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { createUser } from "@/database/databaseController/userControlller/UserCreate";
import { getUserByEmailAndPassword } from "@/database/databaseController/userControlller/GetUserByEmailAndPassword";
import { getSpecificUser } from "@/database/databaseController/userControlller/GetSpecificUser";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
        email: { label: "email", type: "text" },
      },
      async authorize(credentials) {
        let user;

        // Typecasting to only string...

        const email = credentials?.email || "";
        const password = credentials?.password || "";

        try {
          if (credentials)
            user = await getUserByEmailAndPassword({
              email,
              password,
            });

          return { name: user?.name, email: user?.email };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "secret",
  },
  pages: {
    signIn: "/signin",
    signOut: "/logout",
  },
  // secret: process.env.AUTH_SECRET!,
};
