import jwt from "jsonwebtoken";

type Key = "ACCESS_TOKEN_KEY" | "REFRESH_TOKEN_KEY";

export const sign = (payload: Object, key: Key) => {
  return jwt.sign(payload, process.env[key]);
};

export const verify = <T>(token: string, key: Key) => {
  try {
    return jwt.verify(token, process.env[key]) as T;
  } catch (error) {
    return null;
  }
};
