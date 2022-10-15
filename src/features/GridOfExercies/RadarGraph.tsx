import { ResponsiveRadar } from "@nivo/radar";
import theme from "src/styles/theme";
import { serializeRadarGraphData } from "src/utils/graph";

type Props = {
  exercises: Parameters<typeof serializeRadarGraphData>[0];
};

const RadarGraph = ({ exercises }: Props) => {
  return (
    <ResponsiveRadar
      data={serializeRadarGraphData(exercises)}
      keys={["count"]}
      indexBy="name"
      margin={{ top: 20, right: 50, bottom: 60, left: 50 }}
      isInteractive={false}
      colors={theme.colors.action}
      theme={{
        textColor: theme.colors[500],
        grid: { line: { stroke: theme.colors[500] } },
      }}
    />
  );
};

export default RadarGraph;
