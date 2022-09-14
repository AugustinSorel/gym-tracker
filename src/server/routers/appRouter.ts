import createRouter from "../createRouter";
import userRouter from "./user";

const appRouter = createRouter.merge("user.", userRouter);

export type AppRouter = typeof appRouter;

export default appRouter;
