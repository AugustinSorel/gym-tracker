import { router } from "@trpc/server";
import { ZodError } from "zod";

const createRouter = router().formatError(({ shape, error }) => {
  return {
    ...shape,
    data: {
      ...shape.data,
      zodError:
        error.code === "BAD_REQUEST" && error.cause instanceof ZodError
          ? error.cause.flatten()
          : null,
    },
  };
});

export default createRouter;
