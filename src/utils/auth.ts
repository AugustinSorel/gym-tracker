import { Cookies } from "./cookie";
import * as jwt from "./jwt";

export const deserializeUser = (cookies: Partial<Cookies>) => {
  const { accessToken } = cookies;

  if (!accessToken) {
    return null;
  }

  const user = jwt.verify<jwt.AccessToken>(accessToken, "ACCESS_TOKEN_KEY");

  return user;
};
