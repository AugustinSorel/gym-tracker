import { createNextApiHandler } from "@trpc/server/adapters/next";
import { createContext } from "src/server/context";
import { appRouter } from "src/server/routers/_app";

const apiHandler = createNextApiHandler({
  router: appRouter,
  createContext,
  onError: ({ error }) => {
    console.log(error);
  },
});

export default apiHandler;
