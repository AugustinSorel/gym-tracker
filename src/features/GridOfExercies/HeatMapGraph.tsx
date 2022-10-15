import { ResponsiveTimeRange } from "@nivo/calendar";
import theme from "src/styles/theme";
import {
  getDateInJSFormat,
  getFirstDateInMonth,
  getLastDayInMonth,
} from "src/utils/date";
import { serializedHeatMapData } from "src/utils/graph";

type Props = {
  data: Parameters<typeof serializedHeatMapData>[0];
};

const HeatMapGraph = ({ data }: Props) => {
  return (
    <ResponsiveTimeRange
      data={serializedHeatMapData(data)}
      from={getDateInJSFormat(getFirstDateInMonth())}
      to={getDateInJSFormat(getLastDayInMonth())}
      isInteractive={false}
      emptyColor={"transparent"}
      dayBorderColor={theme.colors[500]}
      theme={{ textColor: theme.colors[500] }}
      colors={[
        "hsl(200, 100%, 50%, 25%)",
        "hsl(200, 100%, 50%, 50%)",
        "hsl(200, 100%, 50%, 75%)",
        theme.colors.action,
      ]}
      margin={{ top: 30, right: 0, bottom: 60, left: 20 }}
    />
  );
};

export default HeatMapGraph;
