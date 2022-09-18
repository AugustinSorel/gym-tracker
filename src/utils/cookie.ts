import { User } from "@prisma/client";
import { ServerResponse } from "http";
import { NextApiResponse } from "next";
import { getAuthTokens } from "./jwt";

export type AuthCookies = {
  accessToken: string;
  refreshToken: string;
};

const refreshTokenMaxAge = 60 * 60 * 24 * 7;
const accessTokenMaxAge = 60 * 15;

export const setAuthCookies = (
  res: NextApiResponse | ServerResponse,
  user: User & { session: { tokenVersion: number } }
) => {
  const authTokens = getAuthTokens({
    accessToken: { id: user.id },
    refreshToken: { id: user.id, tokenVersion: user.session.tokenVersion },
  });

  res.setHeader("Set-cookie", [
    `refreshToken=${authTokens.refreshToken}; Max-Age=${refreshTokenMaxAge}; Path=/; HttpOnly`,
    `accessToken=${authTokens.accessToken}; Max-Age=${accessTokenMaxAge}; Path=/; HttpOnly`,
  ]);
};

export const deleteAuthCookies = (res: NextApiResponse | ServerResponse) => {
  res.setHeader("Set-cookie", [
    "refreshToken=''; Max-Age=-1; Path=/; HttpOnly",
    "accessToken=''; Max-Age=-1; Path=/; HttpOnly",
  ]);
};
