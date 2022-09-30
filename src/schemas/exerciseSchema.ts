import z from "zod";

export const newExerciseName = z
  .string({
    required_error: "new exercise name is required",
  })
  .min(3, "minimum lenght is 3")
  .max(255, "maximum length is 255");
