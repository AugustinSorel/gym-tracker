import { router } from "@trpc/server";
import * as userSchemas from "@/schemas/userSchemas";
import * as userServices from "../services/userServices";

const userRouter = router().mutation("create", {
  input: userSchemas.create,
  resolve: async ({ input }) => {
    const user = await userServices.create({ data: input });
    return user;
  },
});

export default userRouter;
