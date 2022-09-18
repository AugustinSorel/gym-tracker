import * as userSchemas from "@/schemas/userSchemas";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import * as bcrypt from "src/utils/bcrypts";
import * as cookie from "src/utils/cookie";
import prisma from "src/utils/prisma";
import requireUser from "../middlewares/requireUser";
import t from "../trpc";

const userRouter = t.router({
  create: t.procedure
    .input(userSchemas.create)
    .mutation(async ({ input, ctx }) => {
      try {
        const user = await prisma.user.create({
          data: {
            ...input,
            password: await bcrypt.encrypt(input.password),
            session: { create: {} },
          },
          include: { session: { select: { tokenVersion: true } } },
        });

        cookie.setAuthCookies(ctx.res, user);

        return user;
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "email is already used",
            });
          }
        }
      }
    }),

  login: t.procedure
    .input(userSchemas.login)
    .mutation(async ({ input, ctx }) => {
      const user = await prisma.user.findUnique({
        where: { email: input.email },
        include: { session: { select: { tokenVersion: true } } },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "this email does not exist",
        });
      }

      const passwordValid = await bcrypt.compare(input.password, user.password);

      if (!passwordValid) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "this password is invalid",
        });
      }

      cookie.setAuthCookies(ctx.res, user);

      return user;
    }),

  me: t.procedure.use(requireUser).query(async ({ ctx }) => {
    return await prisma.user.findUnique({
      where: { id: ctx.user.id },
    });
  }),

  logout: t.procedure.mutation(({ ctx }) => {
    cookie.deleteAuthCookies(ctx.res);
  }),

  revokeRefreshToken: t.procedure.use(requireUser).mutation(async ({ ctx }) => {
    cookie.deleteAuthCookies(ctx.res);
    return await prisma.user.update({
      where: { id: ctx.user.id },
      data: { session: { update: { tokenVersion: { increment: 1 } } } },
    });
  }),
});

export default userRouter;
