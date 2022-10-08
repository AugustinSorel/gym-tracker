import Button from "@/components/Button";
import CustomTooltip from "@/components/CustomTooltip";
import NoDataPanel from "@/components/NoDataPanel";
import { TIME_FRAME_ENUM } from "@/schemas/exerciseSchema";
import { ResponsiveLine } from "@nivo/line";
import { Data } from "@prisma/client";
import { useEffect, useState } from "react";
import useSelectedTimeFrame from "src/store/useSelectedTimeFrame";
import theme from "src/styles/theme";
import serializeGraphData from "src/utils/graph";
import * as Styles from "./ExerciseGraph.styled";
import useGetSelectedExercise from "./useGetSelectedExercise";

const Skeleton = () => {
  return (
    <Styles.ContainerSkeleton>
      <Styles.HeaderSkeleton />
      <Styles.FooterSkeleton />
    </Styles.ContainerSkeleton>
  );
};

const Graph = ({ data }: { data: Data[] }) => {
  const [localData, setLocalData] = useState(data);

  useEffect(() => {
    setLocalData(data);
  }, [data]);

  if (data.length < 1) {
    return <NoDataPanel />;
  }

  return (
    <Styles.GraphSection>
      <ResponsiveLine
        data={serializeGraphData(localData)}
        margin={{ top: 30, right: 120, bottom: 50, left: 50 }}
        xScale={{ type: "time", format: "%Y-%m-%d" }}
        xFormat="time:%Y-%m-%d"
        axisBottom={{ format: "%d %b %y" }}
        colors={theme.colors.action}
        useMesh={true}
        enableGridX={false}
        enableGridY={false}
        curve="catmullRom"
        tooltip={CustomTooltip}
        theme={{
          crosshair: { line: { stroke: theme.colors[500], strokeOpacity: 1 } },
          textColor: theme.colors[500],
          axis: { ticks: { line: { stroke: theme.colors[500] } } },
        }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 20,
            symbolSize: 10,
            symbolShape: "circle",
          },
        ]}
      />
    </Styles.GraphSection>
  );
};

const ExerciseGraph = () => {
  const { setTimeFrame, timeFrame } = useSelectedTimeFrame();
  const selectedExercise = useGetSelectedExercise();

  if (!selectedExercise) {
    return <Skeleton />;
  }

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.ExerciseName>{selectedExercise.name}</Styles.ExerciseName>
      </Styles.Header>

      <Graph data={selectedExercise.data} />

      <Styles.Footer>
        {TIME_FRAME_ENUM.map((text) => (
          <Button
            key={text}
            role="default"
            text={text}
            onClick={() => setTimeFrame(text)}
            style={
              timeFrame === text
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }
                : {}
            }
          />
        ))}
      </Styles.Footer>
    </Styles.Container>
  );
};

export default ExerciseGraph;
