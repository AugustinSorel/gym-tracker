import NoDataPanel from "@/components/NoDataPanel";
import { CalendarDatum, ResponsiveTimeRange } from "@nivo/calendar";
import { Data } from "@prisma/client";
import Link from "next/link";
import { useRef } from "react";
import theme from "src/styles/theme";
import {
  getCurrentMonthDate,
  getDateInJSFormat,
  getFirstDateInMonth,
  getLastDayInMonth,
} from "src/utils/date";
import { serializedHeatMapData } from "src/utils/graph";
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
            <CalendarGraph
              data={exercisesQuery.data.map((d) => d.data).flat()}
            />
          </GridItem>
        </>
      )}
    </Styles.Grid>
  );
};

const CalendarGraph = ({
  data,
}: {
  data: Parameters<typeof serializedHeatMapData>[0];
}) => {
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

export default GridOfExercises;
