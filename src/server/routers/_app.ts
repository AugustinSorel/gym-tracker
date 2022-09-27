import t from "../trpc";
import exerciseRouter from "./exercise";
import userRouter from "./user";

export const appRouter = t.router({
  user: userRouter,
  exercise: exerciseRouter,
});

export type AppRouter = typeof appRouter;
