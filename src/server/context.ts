import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = ({ req, res }: CreateNextContextOptions) => {
  return { req, res };
};

export type Context = ReturnType<typeof createContext>;
