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

const password = z
  .string({ required_error: "password is required" })
  .min(3, "password must be at least 3 characters")
  .max(256, "password must be at most 256 characters");

export const create = z.object({
  name,
  email,
  password,
});

export const login = z.object({
  email,
  password,
});

export const auth = email;
