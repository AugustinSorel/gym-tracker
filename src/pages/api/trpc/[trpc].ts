import { createNextApiHandler } from "@trpc/server/adapters/next";
import appRouter from "src/server/routers/appRouter";

const apiHandler = createNextApiHandler({
  router: appRouter,
});

export default apiHandler;
