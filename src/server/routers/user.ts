import * as userSchemas from "@/schemas/userSchemas";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import * as bcrypt from "src/utils/bcrypts";
import * as cookie from "src/utils/cookie";
import * as jwt from "src/utils/jwt";
import createRouter from "../createRouter";
import * as userServices from "../services/userServices";

const userRouter = createRouter
  .mutation("create", {
    input: userSchemas.create,
    resolve: async ({ input, ctx }) => {
      try {
        const user = await userServices.create({
          data: {
            ...input,
            password: await bcrypt.encrypt(input.password),
          },
        });

        const refreshToken = jwt.sign({ id: user.id }, "REFRESH_TOKEN_KEY");
        const accessToken = jwt.sign({ id: user.id }, "ACCESS_TOKEN_KEY");

        cookie.setAuthCookie(ctx.res, { accessToken, refreshToken });

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
    },
  })
  .mutation("login", {
    input: userSchemas.login,
    resolve: async ({ input, ctx }) => {
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

      const refreshToken = jwt.sign({ id: user.id }, "REFRESH_TOKEN_KEY");
      const accessToken = jwt.sign({ id: user.id }, "ACCESS_TOKEN_KEY");

      cookie.setAuthCookie(ctx.res, { accessToken, refreshToken });

      return user;
    },
  })
  .middleware(({ ctx, next }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return next({ ctx: { ...ctx, user: ctx.user } });
  })
  .query("all", {
    resolve: async () => {
      try {
        return await userServices.findMany({});
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  });

export default userRouter;
