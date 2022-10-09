import z from "zod";
import { exerciseId } from "./exerciseSchema";

const id = z
  .string({ required_error: "new exercise name is required" })
  .cuid({ message: "exercise id must be in the cuid format" });

const weight = z
  .number({
    required_error: "weight lifted is required",
    invalid_type_error: "weight lifted must be a number",
  })
  .positive({ message: "weight lifted must be a positive number" })
  .lt(500, { message: "weight lifted must be smaller than 500 kg" });

const numberOfReps = z
  .number({
    required_error: "number of reps are required",
    invalid_type_error: "number of reps must be a number",
  })
  .positive({ message: "number of reps must be a positive number" })
  .lt(40, { message: "number of reps must be smaller than 40" });

export const addData = z.object({
  exerciseId,
  numberOfReps,
  weight,
});

export const updateData = z.object({
  id,
  weight,
  numberOfReps,
});
