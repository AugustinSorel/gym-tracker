import { Prisma } from "@prisma/client";
import prisma from "src/utils/prisma";

export const create = (props: Prisma.UserCreateArgs) => {
  return prisma.user.create(props);
};

export const findUnique = (props: Prisma.UserFindUniqueArgs) => {
  return prisma.user.findUnique(props);
};

export const findMany = (props: Prisma.UserFindManyArgs) => {
  return prisma.user.findMany(props);
};
