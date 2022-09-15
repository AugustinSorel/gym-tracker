import { router } from "@trpc/server";
import { ZodError } from "zod";
import { Context } from "./context";

const createRouter = router<Context>().formatError(({ shape, error }) => {
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
