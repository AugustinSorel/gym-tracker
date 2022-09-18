import { Cookies } from "./cookie";
import * as jwt from "./jwt";

export const deserializeUser = (cookies: Partial<Cookies>) => {
  const { accessToken } = cookies;

  if (!accessToken) {
    return null;
  }

  const accessTokenPayload = jwt.verify<jwt.AccessToken>(
    accessToken,
    "ACCESS_TOKEN_KEY"
  );

  return accessTokenPayload;
};
