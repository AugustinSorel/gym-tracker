import { Serie } from "@nivo/line";
import { Data } from "@prisma/client";

const serializeGraphData = (data: Data[]): Serie[] => {
  return [
    {
      id: "oneRepMax",
      data: data.map((x) => ({ x: x.createdAt, y: x.oneRepMax })),
    },
  ];
};

export default serializeGraphData;
