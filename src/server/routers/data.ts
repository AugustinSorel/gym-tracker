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
      const { numberOfReps, weight, exerciseId } = input;

      const oneRepMax = getOneRepMax(numberOfReps, weight);
      const createdAt = getCurrentDate();

      return await prisma.data.upsert({
        where: { exerciseId_createdAt: { exerciseId, createdAt } },
        create: {
          numberOfReps,
          weight,
          oneRepMax,
          exerciseId,
          createdAt,
        },

        update: { numberOfReps, weight, oneRepMax },
      });
    }),

  update: t.procedure
    .use(requireUser)
    .input(dataSchema.updateData)
    .mutation(async ({ input }) => {
      const { id, numberOfReps, weight } = input;
      return await prisma.data.update({
        data: {
          weight,
          numberOfReps,
          oneRepMax: getOneRepMax(numberOfReps, weight),
        },

        where: { id },
      });
    }),

  delete: t.procedure
    .use(requireUser)
    .input(dataSchema.id)
    .mutation(async ({ input }) => {
      return await prisma.data.delete({ where: { id: input } });
    }),
});

export default dataRouter;
