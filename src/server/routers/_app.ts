import t from "../trpc";
import authRouter from "./auth";
import userRouter from "./user";

export const appRouter = t.router({
  user: userRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
