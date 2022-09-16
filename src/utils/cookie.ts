import { NextApiResponse } from "next";

export type Cookies = {
  accessToken: string;
  refreshToken: string;
};

const refreshTokenMaxAge = 60 * 60 * 24 * 7;
const accessTokenMaxAge = 60 * 15;

export const setAuthCookie = (res: NextApiResponse, tokens: Cookies) => {
  res.setHeader("Set-cookie", [
    `refreshToken=${tokens.refreshToken}; Max-Age=${refreshTokenMaxAge}; Path=/; HttpOnly`,
    `accessToken=${tokens.accessToken}; Max-Age=${accessTokenMaxAge}; Path=/; HttpOnly`,
  ]);
};
