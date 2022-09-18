import { AuthCookies } from "./cookie";
import * as jwt from "./jwt";
import prisma from "./prisma";

export const deserializeUser = (cookies: Partial<AuthCookies>) => {
  const { accessToken } = cookies;

  if (!accessToken) {
    return null;
  }

  const accessTokenPayload = jwt.verify<jwt.AuthTokens["accessToken"]>(
    accessToken,
    "ACCESS_TOKEN_KEY"
  );

  return accessTokenPayload;
};

export const refreshAuthTokens = async (cookies: Partial<AuthCookies>) => {
  const { refreshToken } = cookies;

  if (!refreshToken) {
    return null;
  }

  const refreshTokenPayload = jwt.verify<jwt.AuthTokens["refreshToken"]>(
    refreshToken,
    "REFRESH_TOKEN_KEY"
  );

  if (!refreshTokenPayload) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { id: refreshTokenPayload.id },
    include: { session: { select: { tokenVersion: true } } },
  });

  if (!user) {
    return null;
  }

  if (user.session.tokenVersion !== refreshTokenPayload.tokenVersion) {
    return null;
  }

  const authTokens = jwt.getAuthTokens({
    accessToken: { id: user.id },
    refreshToken: {
      id: user.id,
      tokenVersion: user.session.tokenVersion,
    },
  });

  return authTokens;
};
