import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "src/server/routers/appRouter";

const trpc = createReactQueryHooks<AppRouter>();

export default trpc;
