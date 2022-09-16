import { TRPCError } from "@trpc/server";
import { deserializeUser } from "src/utils/auth";
import t from "../trpc";

const requireUserProcedure = t.procedure.use(({ ctx, next }) => {
  const user = deserializeUser(ctx.req.cookies);

  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return next({ ctx: { user } });
});

export default requireUserProcedure;
