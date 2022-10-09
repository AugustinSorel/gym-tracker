import t from "../trpc";
import * as exerciseSchemas from "@/schemas/exerciseSchema";
import prisma from "src/utils/prisma";
import requireUser from "../middlewares/requireUser";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { TRPCError } from "@trpc/server";
import { timeFrameDict } from "src/utils/date";

const exerciseRouter = t.router({
  new: t.procedure
    .use(requireUser)
    .input(exerciseSchemas.exerciseName)
    .mutation(async ({ input, ctx }) => {
      try {
        return await prisma.exercise.create({
          data: {
            name: input,
            user: { connect: { id: ctx.user.id } },
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
      include: {
        data: {
          orderBy: { createdAt: "asc" },
          where: { createdAt: { gte: timeFrameDict["1M"] } },
        },
      },
      orderBy: { createdAt: "asc" },
    });
  }),

  get: t.procedure
    .use(requireUser)
    .input(exerciseSchemas.getExercise)
    .query(async ({ input }) => {
      const { exerciseId, timeFrame } = input;

      return await prisma.exercise.findUnique({
        where: { id: exerciseId },
        include: {
          data: {
            orderBy: { createdAt: "asc" },
            where: { createdAt: { gte: timeFrameDict[timeFrame] } },
          },
        },
      });
    }),

  delete: t.procedure
    .use(requireUser)
    .input(exerciseSchemas.exerciseId)
    .mutation(async ({ input }) => {
      return await prisma.exercise.delete({
        where: { id: input },
      });
    }),
});

export default exerciseRouter;
