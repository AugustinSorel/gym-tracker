import prisma from "src/utils/prisma";
import requireUser from "../middlewares/requireUser";
import t from "../trpc";

const userRouter = t.router({
  me: t.procedure.use(requireUser).query(async ({ ctx }) => {
    return await prisma.user.findUnique({
      where: { id: ctx.user.id },
    });
  }),
});

export default userRouter;
