import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { GetInferenceHelpers } from "@trpc/server";
import { AppRouter } from "src/server/routers/_app";
import superjson from "superjson";

export const trpc = createTRPCNext<AppRouter>({
  config: () => {
    return {
      transformer: superjson,
      links: [httpBatchLink({ url: "/api/trpc" })],
    };
  },
});

export type InferProcedures = GetInferenceHelpers<AppRouter>;
