import { NextApiRequest } from "next";
import * as jwt from "src/utils/jwt";

type User = {
  id: string;
};

const deserializeUser = (req: NextApiRequest) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return null;
  }

  const user = jwt.verify<User>(accessToken, "ACCESS_TOKEN_KEY");

  return user;
};

export default deserializeUser;
