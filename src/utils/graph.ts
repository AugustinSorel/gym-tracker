import { CalendarDatum } from "@nivo/calendar";
import { Serie } from "@nivo/line";
import { Data } from "@prisma/client";
import { getDateInJSFormat } from "./date";
import { RouterOutput } from "./trpc";

export const serializeLineGraphData = (data: Data[]): Serie[] => {
  return [
    {
      id: "oneRepMax",
      data: data.map((x) => ({ x: x.createdAt, y: x.oneRepMax })),
    },
  ];
};

export const serializeRadarGraphData = (
  exercises: NonNullable<RouterOutput["exercise"]["all"]>
): Record<string, unknown>[] => {
  return exercises
    .map((exercise) => {
      return {
        count: exercise.data.length,
        name: exercise.name,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
};

export const serializedHeatMapData = (data: Data[]): CalendarDatum[] => {
  const map = new Map<string, CalendarDatum>();

  for (const item of data) {
    const day = getDateInJSFormat(item.createdAt);

    map.set(day, { day, value: (map.get(day)?.value ?? 0) + 1 });
  }

  return Array.from(map.values());
};
