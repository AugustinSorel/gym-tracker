import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

type Key = "ACCESS_TOKEN_KEY" | "REFRESH_TOKEN_KEY";

export type AccessToken = Pick<User, "id">;
export type RefreshToken = Pick<User, "id">;

export const getRefreshToken = (payload: RefreshToken) => {
  return jwt.sign(payload, process.env["REFRESH_TOKEN_KEY"]);
};

export const getAccessToken = (payload: AccessToken) => {
  return jwt.sign(payload, process.env["ACCESS_TOKEN_KEY"]);
};

export const verify = <T>(token: string, key: Key) => {
  try {
    return jwt.verify(token, process.env[key]) as T;
  } catch (error) {
    return null;
  }
};
