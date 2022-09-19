import z from "zod";

const name = z
  .string({ required_error: "name is required" })
  .min(3, "name must be at least 3 characters")
  .max(256, "name must be at most 256 characters");

const email = z
  .string({ required_error: "email is required" })
  .min(3, "email must be at least 3 characters")
  .max(256, "email must be at most 256 characters")
  .email("email must be valid");

export const googleAuth = z.object({
  name,
  email,
});

export type GoogleAuthInput = z.TypeOf<typeof googleAuth>;
