import { router, TRPCError } from "@trpc/server";
import * as userSchemas from "@/schemas/userSchemas";
import * as userServices from "../services/userServices";
import { Prisma } from "@prisma/client";
import * as bcrypt from "src/utils/bcrypts";

const userRouter = router()
  .mutation("create", {
    input: userSchemas.create,
    resolve: async ({ input }) => {
      try {
        return await userServices.create({
          data: {
            ...input,
            password: await bcrypt.encrypt(input.password),
          },
        });
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
    resolve: async ({ input }) => {
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

      return user;
    },
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
