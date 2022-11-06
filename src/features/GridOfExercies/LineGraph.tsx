import { ResponsiveLine } from "@nivo/line";
import theme from "src/styles/theme";
import { serializeLineGraphData } from "src/utils/graph";
import { RouterOutput } from "src/utils/trpc";

type Props = {
  exercise: NonNullable<RouterOutput["exercise"]["get"]>;
};

const LineGraph = ({ exercise }: Props) => {
  if (exercise.data.length < 1) {
    return null;
  }

  return (
    <div style={{ height: "87%", width: "100%" }}>
      <ResponsiveLine
        data={serializeLineGraphData(exercise.data)}
        margin={{ bottom: 10, left: 10, right: 10, top: 10 }}
        xScale={{ type: "time", format: "%Y-%m-%d" }}
        xFormat="time:%Y-%m-%d"
        yScale={{ type: "linear", min: "auto", max: "auto" }}
        axisBottom={{ tickSize: 0, format: "" }}
        axisLeft={{ renderTick: () => <></> }}
        enableGridX={false}
        enableGridY={false}
        enablePoints={exercise.data.length === 1}
        colors={theme.colors.action}
        curve="monotoneX"
      />
    </div>
  );
};

export default LineGraph;
