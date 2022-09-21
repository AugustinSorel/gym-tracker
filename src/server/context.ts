import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
  const user = null;
  return { req, res, user };
};

export type Context = inferAsyncReturnType<typeof createContext>;
