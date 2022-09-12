import { createReactQueryHooks } from "@trpc/react";
import { AppRouter } from "src/server/createRouter";

const trpc = createReactQueryHooks<AppRouter>();

export default trpc;
