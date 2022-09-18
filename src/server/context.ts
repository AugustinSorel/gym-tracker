import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { deserializeUser } from "src/utils/auth";

export const createContext = ({ req, res }: CreateNextContextOptions) => {
  const user = deserializeUser(req.cookies);
  return { req, res, user };
};

export type Context = ReturnType<typeof createContext>;
