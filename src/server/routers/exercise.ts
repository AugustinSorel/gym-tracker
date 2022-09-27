import t from "../trpc";
import * as exerciseSchemas from "@/schemas/exerciseSchema";
import prisma from "src/utils/prisma";
import requireUser from "../middlewares/requireUser";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";

const exerciseRouter = t.router({
  new: t.procedure
    .use(requireUser)
    .input(exerciseSchemas.newExerciseName)
    .mutation(async ({ input, ctx }) => {
      try {
        return await prisma.exercise.create({
          data: {
            name: input,
            User: { connect: { id: ctx.user.id } },
          },
        });
      } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
          if (error.code === "P2002") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "This name is already used",
            });
          }
        }
      }
    }),

  all: t.procedure.use(requireUser).query(async ({ ctx }) => {
    return await prisma.exercise.findMany({
      where: { userId: ctx.user.id },
      orderBy: { createdAt: "asc" },
    });
  }),
});

export default exerciseRouter;
