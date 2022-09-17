import * as userSchemas from "@/schemas/userSchemas";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import * as bcrypt from "src/utils/bcrypts";
import * as cookie from "src/utils/cookie";
import * as jwt from "src/utils/jwt";
import requireUser from "../middlewares/requireUser";
import * as userServices from "../services/userServices";
import t from "../trpc";

const userRouter = t.router({
  create: t.procedure
    .input(userSchemas.create)
    .mutation(async ({ input, ctx }) => {
      try {
        const user = await userServices.create({
          data: {
            ...input,
            password: await bcrypt.encrypt(input.password),
            session: { create: {} },
          },
        });

        const refreshToken = jwt.getRefreshToken({ id: user.id });
        const accessToken = jwt.getAccessToken({ id: user.id });

        cookie.setAuthCookies(ctx.res, { accessToken, refreshToken });

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
      const user = await userServices.findUnique({
        where: { email: input.email },
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

      const refreshToken = jwt.getRefreshToken({ id: user.id });
      const accessToken = jwt.getAccessToken({ id: user.id });

      cookie.setAuthCookies(ctx.res, { accessToken, refreshToken });

      return user;
    }),

  me: t.procedure.use(requireUser).query(async ({ ctx }) => {
    return await userServices.findUnique({
      where: { id: ctx.user.id },
    });
  }),

  logout: t.procedure.mutation(({ ctx }) => {
    cookie.resetAuthCookies(ctx.res);
  }),
});

export default userRouter;
