import NoDataPanel from "@/components/NoDataPanel";
import Link from "next/link";
import { useRef } from "react";
import { getCurrentMonthDate } from "src/utils/date";
import { trpc } from "src/utils/trpc";
import GridItem from "./GridItem";
import GridSkeleton from "./GridSkeleton";
import HeatMapGraph from "./HeatMapGraph";
import * as Styles from "./index.styled";
import LineGraph from "./LineGraph";
import RadarGraph from "./RadarGraph";

const GridOfExercises = () => {
  const exercisesQuery = trpc.exercise.all.useQuery();
  const gridRef = useRef<HTMLDivElement>(null);
  const delay = 50 * (gridRef.current?.childNodes ? 0 : 1);

  if (exercisesQuery.isLoading || !exercisesQuery.data) {
    return <GridSkeleton />;
  }

  if (exercisesQuery.data.length < 1) {
    return <NoDataPanel />;
  }

  return (
    <Styles.Grid ref={gridRef}>
      {exercisesQuery.data.map((exercise, i) => {
        return (
          <Styles.Anchor
            tabIndex={-1}
            key={exercise.id}
            href={`/exercise/${exercise.id}`}
          >
            <GridItem
              title={exercise.name}
              delay={i * delay}
              togglePinInput={{
                exerciseId: exercise.id,
                isPinned: exercise.isPinned,
              }}
            >
              <LineGraph exercise={exercise} />
            </GridItem>
          </Styles.Anchor>
        );
      })}

      {exercisesQuery.data.length > 0 && (
        <>
          <GridItem
            delay={exercisesQuery.data.length * delay}
            title="exercises count"
          >
            <RadarGraph exercises={exercisesQuery.data} />
          </GridItem>

          <GridItem
            delay={(exercisesQuery.data.length + 1) * delay}
            title={`heatmap - ${getCurrentMonthDate()}`}
          >
            <HeatMapGraph
              data={exercisesQuery.data.map((d) => d.data).flat()}
            />
          </GridItem>
        </>
      )}
    </Styles.Grid>
  );
};

export default GridOfExercises;
