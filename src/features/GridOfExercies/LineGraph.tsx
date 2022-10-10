import { ResponsiveLine } from "@nivo/line";
import theme from "src/styles/theme";
import { serializeLineGraphData } from "src/utils/graph";
import { InferProcedures } from "src/utils/trpc";

type Props = {
  exercise: NonNullable<InferProcedures["exercise"]["get"]["output"]>;
};

const LineGraph = ({ exercise }: Props) => {
  if (exercise.data.length < 1) {
    return null;
  }

  return (
    <ResponsiveLine
      data={serializeLineGraphData(exercise.data)}
      margin={{ bottom: 50, left: 10, right: 10, top: 10 }}
      xScale={{ type: "time", format: "%Y-%m-%d" }}
      xFormat="time:%Y-%m-%d"
      yScale={{ type: "linear", min: "auto", max: "auto" }}
      axisBottom={{ tickSize: 0, format: "" }}
      axisLeft={{ renderTick: () => <></> }}
      enableGridX={false}
      enableGridY={false}
      enablePoints={exercise.data.length === 1}
      colors={theme.colors.action}
      curve="catmullRom"
    />
  );
};

export default LineGraph;
