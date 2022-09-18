import { ServerResponse } from "http";
import { NextApiResponse } from "next";
import { AuthCookies, setAuthCookies } from "./cookie";
import * as jwt from "./jwt";
import * as cookie from "./cookie";
import prisma from "./prisma";

export const deserializeUser = async (
  res: NextApiResponse | ServerResponse,
  cookies: Partial<AuthCookies>
) => {
  const { accessToken, refreshToken } = cookies;

  if (!refreshToken && !accessToken) {
    cookie.deleteAuthCookies(res);
    return null;
  }

  const accessTokenPayload = jwt.verify<jwt.AuthTokensPayload["accessToken"]>(
    accessToken,
    "ACCESS_TOKEN_KEY"
  );

  if (accessTokenPayload) {
    return accessTokenPayload;
  }

  const refreshTokenPayload = jwt.verify<jwt.AuthTokensPayload["refreshToken"]>(
    refreshToken,
    "REFRESH_TOKEN_KEY"
  );

  if (!refreshTokenPayload) {
    cookie.deleteAuthCookies(res);
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: refreshTokenPayload.id },
    include: { session: { select: { tokenVersion: true } } },
  });

  if (!user) {
    cookie.deleteAuthCookies(res);
    return null;
  }

  if (user.session.tokenVersion !== refreshTokenPayload.tokenVersion) {
    cookie.deleteAuthCookies(res);
    return null;
  }

  setAuthCookies(res, user);
  return user;
};
