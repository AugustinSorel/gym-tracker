import { inferAsyncReturnType } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import { deserializeUser } from "src/utils/auth";

export const createContext = async ({ req, res }: CreateNextContextOptions) => {
  const user = await deserializeUser(res, req.cookies);

  return { req, res, user };
};

export type Context = inferAsyncReturnType<typeof createContext>;
