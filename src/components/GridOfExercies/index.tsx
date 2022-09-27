import { Exercise } from "@prisma/client";
import { memo, useRef } from "react";
import trpc from "src/utils/trpc";
import * as Styles from "./index.styled";

const GridSkeleton = () => {
  return (
    <Styles.GridSkeleton>
      {[...Array(10)].map((_, i) => (
        <Styles.ItemSkeleton key={i} />
      ))}
    </Styles.GridSkeleton>
  );
};

const Grid = memo(({ exercises }: { exercises: Exercise[] }) => {
  const renderCounter = useRef(0);
  renderCounter.current += 1;

  return (
    <Styles.Grid>
      {exercises.map((exercise, i) => (
        <Styles.Item
          tabIndex={0}
          key={exercise.id}
          delay={i * 50 * (renderCounter.current > 1 ? 0 : 1)}
        >
          <Styles.Title>{exercise.name}</Styles.Title>
        </Styles.Item>
      ))}
    </Styles.Grid>
  );
});
Grid.displayName = "GridComponent";

const GridOfExercises = () => {
  const exercisesQuery = trpc.exercise.all.useQuery();

  if (exercisesQuery.isLoading || !exercisesQuery.data) {
    return <GridSkeleton />;
  }

  if (exercisesQuery.data.length < 1) {
    return <p>No data</p>;
  }

  return <Grid exercises={exercisesQuery.data} />;
};

export default GridOfExercises;
