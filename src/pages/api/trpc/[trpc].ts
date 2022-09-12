import { createNextApiHandler } from "@trpc/server/adapters/next";
import createRouter from "src/server/createRouter";

const apiHandler = createNextApiHandler({
  router: createRouter,
});

export default apiHandler;
