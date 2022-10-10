import { Serie } from "@nivo/line";
import { Data } from "@prisma/client";
import { InferProcedures } from "./trpc";

export const serializeLineGraphData = (data: Data[]): Serie[] => {
  return [
    {
      id: "oneRepMax",
      data: data.map((x) => ({ x: x.createdAt, y: x.oneRepMax })),
    },
  ];
};

export const serializeRadarGraphData = (
  exercises: NonNullable<InferProcedures["exercise"]["all"]["output"]>
): Record<string, unknown>[] => {
  return exercises.map((ex) => {
    return {
      count: ex.data.length,
      name: ex.name,
    };
  });
};
