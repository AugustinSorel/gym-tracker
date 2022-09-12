import { Prisma } from "@prisma/client";
import prisma from "src/utils/prisma";

export const create = (props: Prisma.UserCreateArgs) => {
  return prisma.user.create(props);
};
