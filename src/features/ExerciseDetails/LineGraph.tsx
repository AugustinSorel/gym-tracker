import CustomTooltip from "@/components/CustomTooltip";
import NoDataPanel from "@/components/NoDataPanel";
import { ResponsiveLine } from "@nivo/line";
import { Data } from "@prisma/client";
import { useEffect, useState } from "react";
import theme from "src/styles/theme";
import { serializeLineGraphData } from "src/utils/graph";

type Props = {
  data: Data[];
};

const LineGraph = ({ data }: Props) => {
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  if (data.length < 1) {
    return <NoDataPanel />;
  }

  return (
    <ResponsiveLine
      data={serializeLineGraphData(localData)}
      margin={{ top: 10, right: 10, bottom: 40, left: 50 }}
      xScale={{ type: "time", format: "%Y-%m-%d" }}
      xFormat="time:%Y-%m-%d"
      axisBottom={{ format: "%d %b %y" }}
      colors={theme.colors.action}
      useMesh={true}
      enableGridX={false}
      enableGridY={false}
      axisLeft={{ format: (value) => `${value} kg` }}
      curve="catmullRom"
      tooltip={CustomTooltip}
      theme={{
        crosshair: { line: { stroke: theme.colors[500], strokeOpacity: 1 } },
        textColor: theme.colors[500],
        axis: { ticks: { line: { stroke: theme.colors[500] } } },
      }}
      legends={[
        {
          anchor: "bottom",
          direction: "column",
          translateY: -10,
          itemWidth: 80,
          itemHeight: 20,
          symbolSize: 10,
          symbolShape: "circle",
        },
      ]}
    />
  );
};

export default LineGraph;
