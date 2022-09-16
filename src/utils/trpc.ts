import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "src/server/routers/_app";

const trpc = createTRPCNext<AppRouter>({
  config: () => {
    return {
      links: [httpBatchLink({ url: "/api/trpc" })],
    };
  },
});

export default trpc;
