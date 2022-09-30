import t from "../trpc";
import dataRouter from "./data";
import exerciseRouter from "./exercise";
import userRouter from "./user";

export const appRouter = t.router({
  user: userRouter,
  exercise: exerciseRouter,
  data: dataRouter,
});

export type AppRouter = typeof appRouter;
