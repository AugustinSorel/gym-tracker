import { createNextApiHandler } from "@trpc/server/adapters/next";
import appRouter from "src/server/createRouter";

const apiHandler = createNextApiHandler({
  router: appRouter,
});

export default apiHandler;
