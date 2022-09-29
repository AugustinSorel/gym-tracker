import z from "zod";

export const newExerciseName = z
  .string({
    required_error: "new exercise name is required",
  })
  .min(3, "minimum lenght is 3")
  .max(255, "maximum length is 255");

export const addExerciseData = z.object({
  numberOfReps: z
    .number({
      required_error: "number of reps are required",
      invalid_type_error: "number of reps must be a number",
    })
    .positive({ message: "number of reps must be a positive number" })
    .lt(40, { message: "number of reps must be smaller than 40" }),

  weightLifted: z
    .number({
      required_error: "weight lifted is required",
      invalid_type_error: "weight lifted must be a number",
    })
    .positive({ message: "weight lifted must be a positive number" })
    .lt(500, { message: "weight lifted must be smaller than 500 kg" }),
});
