import z from "zod";

export const exerciseName = z
  .string({ required_error: "new exercise name is required" })
  .min(3, "minimum lenght is 3")
  .max(255, "maximum length is 255");

export const exerciseId = z
  .string({ required_error: "new exercise name is required" })
  .cuid({ message: "exercise id must be in the cuid format" });

export const TIME_FRAME_ENUM = ["ALL", "1Y", "6M", "1M", "1W"] as const;
const timeFrame = z.enum(TIME_FRAME_ENUM);

export const getExercise = z.object({
  exerciseId,
  timeFrame,
});

export const updateName = z.object({
  exerciseId,
  exerciseName,
});

export type TimeFrame = z.infer<typeof timeFrame>;
