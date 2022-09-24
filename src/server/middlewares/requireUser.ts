import { TRPCError } from "@trpc/server";
import t from "../trpc";

const requireUser = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx: { user: ctx.session.user } });
});

export default requireUser;
