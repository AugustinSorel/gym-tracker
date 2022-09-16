import { createNextApiHandler } from "@trpc/server/adapters/next";
import createContext from "src/server/context";
import appRouter from "src/server/routers/appRouter";

const apiHandler = createNextApiHandler({
  router: appRouter,
  createContext,
});

export default apiHandler;
