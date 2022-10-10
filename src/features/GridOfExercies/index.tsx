import NoDataPanel from "@/components/NoDataPanel";
import Link from "next/link";
import { useRef } from "react";
import { trpc } from "src/utils/trpc";
import GridItem from "./GridItem";
import GridSkeleton from "./GridSkeleton";
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
          <Link key={exercise.id} href={`/exercise/${exercise.id}`} passHref>
            <Styles.Anchor tabIndex={-1}>
              <GridItem title={exercise.name} delay={i * delay}>
                <LineGraph exercise={exercise} />
              </GridItem>
            </Styles.Anchor>
          </Link>
        );
      })}

      {exercisesQuery.data.length > 0 && (
        <GridItem
          delay={exercisesQuery.data.length * delay}
          title="exercises count"
        >
          <RadarGraph exercises={exercisesQuery.data} />
        </GridItem>
      )}
    </Styles.Grid>
  );
};

export default GridOfExercises;
