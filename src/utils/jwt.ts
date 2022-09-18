import { Session, User } from "@prisma/client";
import jwt from "jsonwebtoken";

type Key = "ACCESS_TOKEN_KEY" | "REFRESH_TOKEN_KEY";

export type AuthTokens = {
  accessToken: Pick<User, "id">;
  refreshToken: Pick<User, "id"> & Pick<Session, "tokenVersion">;
};

export const getAuthTokens = (authTokens: AuthTokens) => {
  const accessToken = jwt.sign(
    authTokens.accessToken,
    process.env["ACCESS_TOKEN_KEY"],
    {
      expiresIn: "7d",
    }
  );

  const refreshToken = jwt.sign(
    authTokens.refreshToken,
    process.env["REFRESH_TOKEN_KEY"],
    {
      expiresIn: "15min",
    }
  );

  return { accessToken, refreshToken };
};

export const verify = <T>(token: string | undefined, key: Key) => {
  if (!token) {
    return null;
  }

  try {
    return jwt.verify(token, process.env[key]) as T;
  } catch (error) {
    return null;
  }
};
