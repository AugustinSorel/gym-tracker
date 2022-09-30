import * as dataSchema from "@/schemas/dataSchema";
import { TRPCError } from "@trpc/server";
import { getCurrentDateFormated } from "src/utils/date";
import { getOneRepMax } from "src/utils/math";
import prisma from "src/utils/prisma";
import requireUser from "../middlewares/requireUser";
import t from "../trpc";

const dataRouter = t.router({
  new: t.procedure
    .use(requireUser)
    .input(dataSchema.addData)
    .mutation(async ({ input }) => {
      const { numberOfReps, weight, exerciseName } = input;

      const oneRepMax = getOneRepMax(numberOfReps, weight);
      const createdAt = getCurrentDateFormated();

      try {
        const data = await prisma.data.upsert({
          where: { createdAt },
          create: {
            numberOfReps,
            weight,
            oneRepMax,
            exercise: { connect: { name: exerciseName } },
            createdAt,
          },

          update: { numberOfReps, weight, oneRepMax },
        });

        return data;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
});

export default dataRouter;
