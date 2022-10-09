import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { addDays, addMonths } from "src/utils/date";
import { sendVerificationRequest } from "src/utils/email";
import { getOneRepMax } from "src/utils/math";
import prisma from "src/utils/prisma";

export const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest,
    }),
  ],
  pages: {
    signIn: "/sign-in",
    verifyRequest: "/verify-request",
    signOut: "/sign-out",
  },
  secret: process.env.NEXTAUTH_SECRET,
  events: {
    createUser: async ({ user }) => {
      await prisma.exercise.create({
        data: {
          name: "Hello",
          data: {
            createMany: {
              data: [
                {
                  createdAt: addMonths(new Date(), -12),
                  numberOfReps: 2,
                  weight: 2,
                  oneRepMax: getOneRepMax(2, 2),
                },
                {
                  createdAt: addMonths(new Date(), -8),
                  numberOfReps: 3,
                  weight: 3,
                  oneRepMax: getOneRepMax(3, 3),
                },
                {
                  createdAt: addMonths(new Date(), -4),
                  numberOfReps: 5,
                  weight: 5,
                  oneRepMax: getOneRepMax(5, 5),
                },
                {
                  createdAt: addDays(new Date(), -9),
                  numberOfReps: 10,
                  weight: 10,
                  oneRepMax: getOneRepMax(10, 10),
                },
                {
                  createdAt: addDays(new Date(), -5),
                  numberOfReps: 13,
                  weight: 13,
                  oneRepMax: getOneRepMax(13, 13),
                },
                {
                  createdAt: addDays(new Date(), -1),
                  numberOfReps: 10,
                  weight: 10,
                  oneRepMax: getOneRepMax(10, 10),
                },
              ],
            },
          },
          createdAt: addDays(new Date(), -10),
          userId: user.id,
        },
      });

      await prisma.exercise.create({
        data: {
          name: "World",
          data: {
            createMany: {
              data: [
                {
                  createdAt: addMonths(new Date(), -12),
                  numberOfReps: 2,
                  weight: 2,
                  oneRepMax: getOneRepMax(2, 2),
                },
                {
                  createdAt: addMonths(new Date(), -8),
                  numberOfReps: 3,
                  weight: 3,
                  oneRepMax: getOneRepMax(3, 3),
                },
                {
                  createdAt: addMonths(new Date(), -4),
                  numberOfReps: 5,
                  weight: 5,
                  oneRepMax: getOneRepMax(5, 5),
                },
                {
                  createdAt: addDays(new Date(), -9),
                  numberOfReps: 13,
                  weight: 13,
                  oneRepMax: getOneRepMax(13, 13),
                },
                {
                  createdAt: addDays(new Date(), -5),
                  numberOfReps: 10,
                  weight: 10,
                  oneRepMax: getOneRepMax(10, 10),
                },
                {
                  createdAt: addDays(new Date(), -1),
                  numberOfReps: 13,
                  weight: 13,
                  oneRepMax: getOneRepMax(13, 13),
                },
              ],
            },
          },
          createdAt: addDays(new Date(), -10),
          userId: user.id,
        },
      });
    },
  },
};

export default NextAuth(nextAuthOptions);
