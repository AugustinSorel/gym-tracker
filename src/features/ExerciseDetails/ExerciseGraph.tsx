import Button from "@/components/Button";
import CustomTooltip from "@/components/CustomTooltip";
import NoDataPanel from "@/components/NoDataPanel";
import { TIME_FRAME_ENUM } from "@/schemas/exerciseSchema";
import { ResponsiveLine } from "@nivo/line";
import { Data } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSelectedTimeFrame from "src/store/useSelectedTimeFrame";
import theme from "src/styles/theme";
import serializeGraphData from "src/utils/graph";
import { trpc } from "src/utils/trpc";
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
    </Styles.GraphSection>
  );
};

const ExerciseGraph = () => {
  const { setTimeFrame, timeFrame } = useSelectedTimeFrame();
  const selectedExercise = useGetSelectedExercise();
  const utils = trpc.useContext();
  const router = useRouter();

  const deleteMutation = trpc.exercise.delete.useMutation({
    onSettled: () => {
      utils.exercise.all.invalidate();
      router.push("/");
    },

    onMutate: async () => {
      await utils.exercise.all.cancel();

      utils.exercise.all.setData((prev) => {
        return [
          ...(prev ?? []).filter(
            (e) => e.id !== (router.query.exerciseId as string)
          ),
        ];
      });
    },
  });

  if (!selectedExercise) {
    return <Skeleton />;
  }

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.ExerciseName>{selectedExercise.name}</Styles.ExerciseName>
        <Button
          role="svg"
          svgName="close"
          onClick={() => deleteMutation.mutate(selectedExercise.id)}
        />
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
