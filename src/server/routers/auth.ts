import t from "../trpc";
import * as authSchemas from "@/schemas/authSchemas";
import prisma from "src/utils/prisma";
import * as cookie from "src/utils/cookie";

const authRouter = t.router({
  google: t.procedure
    .input(authSchemas.googleAuth)
    .mutation(async ({ input, ctx }) => {
      const user = await prisma.user.upsert({
        where: { email: input.email },

        create: {
          email: input.email,
          name: input.name,
          password: "",
          session: { create: {} },
        },

        update: {},

        include: { session: { select: { tokenVersion: true } } },
      });

      cookie.setAuthCookies(ctx.res, user);
    }),
});

export default authRouter;
