import NoDataPanel from "@/components/NoDataPanel";
import { useRef } from "react";
import { trpc } from "src/utils/trpc";
import GridItem from "./GridItem";
import GridSkeleton from "./GridSkeleton";
import * as Styles from "./index.styled";

const GridOfExercises = () => {
  const exercisesQuery = trpc.exercise.all.useQuery();
  const gridRef = useRef<HTMLDivElement>(null);

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
          <GridItem
            key={exercise.id}
            delay={i * 50 * (gridRef.current?.childNodes ? 0 : 1)}
            exercise={exercise}
          />
        );
      })}
    </Styles.Grid>
  );
};

export default GridOfExercises;
