import * as dataSchema from "@/schemas/dataSchema";
import { getCurrentDate } from "src/utils/date";
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
      const createdAt = getCurrentDate();

      return await prisma.data.upsert({
        where: { exerciseName_createdAt: { createdAt, exerciseName } },
        create: {
          numberOfReps,
          weight,
          oneRepMax,
          exercise: { connect: { name: exerciseName } },
          createdAt,
        },

        update: { numberOfReps, weight, oneRepMax },
      });
    }),
});

export default dataRouter;
