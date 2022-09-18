import { ServerResponse } from "http";
import { NextApiResponse } from "next";

export type AuthCookies = {
  accessToken: string;
  refreshToken: string;
};

const refreshTokenMaxAge = 60 * 60 * 24 * 7;
const accessTokenMaxAge = 60 * 15;

export const setAuthCookies = (
  res: NextApiResponse | ServerResponse,
  tokens: AuthCookies
) => {
  res.setHeader("Set-cookie", [
    `refreshToken=${tokens.refreshToken}; Max-Age=${refreshTokenMaxAge}; Path=/; HttpOnly`,
    `accessToken=${tokens.accessToken}; Max-Age=${accessTokenMaxAge}; Path=/; HttpOnly`,
  ]);
};

export const deleteAuthCookies = (res: NextApiResponse | ServerResponse) => {
  res.setHeader("Set-cookie", [
    "refreshToken=''; Max-Age=-1; Path=/; HttpOnly",
    "accessToken=''; Max-Age=-1; Path=/; HttpOnly",
  ]);
};
