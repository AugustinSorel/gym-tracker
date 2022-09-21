import z from "zod";

export const emailSchema = z
  .string({ required_error: "email is required" })
  .min(3, "email must be at least 3 characters")
  .max(256, "email must be at most 256 characters")
  .email("email must be valid");
