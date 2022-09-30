import prisma from "src/utils/prisma";
import requireUser from "../middlewares/requireUser";
import t from "../trpc";
import * as dataSchema from "@/schemas/dataSchema";

const dataRouter = t.router({
  new: t.procedure
    .use(requireUser)
    .input(dataSchema.addData)
    .mutation(async ({ input }) => {
      const { numberOfReps, weight, exerciseName } = input;
      const oneRepMax = weight * (1 + numberOfReps / 30);
      console.log(input);
      try {
        const data = await prisma.data.create({
          data: {
            numberOfReps,
            weight,
            oneRepMax,
            exercise: { connect: { name: exerciseName } },
          },
        });

        return data;
      } catch (error) {
        console.log(error);
      }
    }),
});

export default dataRouter;
