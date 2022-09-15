import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import deserializeUser from "./middlewares/deserializeUser";

const createContext = ({ req, res }: CreateNextContextOptions) => {
  const user = deserializeUser(req);

  return {
    req,
    res,
    user,
  };
};

export type Context = ReturnType<typeof createContext>;

export default createContext;
