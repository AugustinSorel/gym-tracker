import { NextApiRequest } from "next";
import * as jwt from "src/utils/jwt";

const deserializeUser = (req: NextApiRequest) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return null;
  }

  const user = jwt.verify<jwt.AccessToken>(accessToken, "ACCESS_TOKEN_KEY");

  return user;
};

export default deserializeUser;
