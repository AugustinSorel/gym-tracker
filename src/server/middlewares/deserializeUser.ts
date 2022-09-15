import { Cookies } from "src/utils/cookie";
import * as jwt from "src/utils/jwt";

const deserializeUser = (cookies: Partial<Cookies>) => {
  const { accessToken } = cookies;

  if (!accessToken) {
    return null;
  }

  const user = jwt.verify<jwt.AccessToken>(accessToken, "ACCESS_TOKEN_KEY");

  return user;
};

export default deserializeUser;
