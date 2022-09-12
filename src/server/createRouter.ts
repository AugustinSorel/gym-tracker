import { router } from "@trpc/server";

const appRouter = router().query("hello", {
  resolve: () => "world",
});

export type AppRouter = typeof appRouter;

export default appRouter;
