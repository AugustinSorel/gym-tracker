import { TRPCError } from "@trpc/server";
import t from "../trpc";

const requireUser = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx: { user: ctx.user } });
});

export default requireUser;
