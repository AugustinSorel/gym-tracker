import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "src/server/routers/_app";
import superjson from "superjson";

const trpc = createTRPCNext<AppRouter>({
  config: () => {
    return {
      transformer: superjson,
      links: [httpBatchLink({ url: "/api/trpc" })],
    };
  },
});

export default trpc;
