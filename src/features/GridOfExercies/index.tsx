import NoDataPanel from "@/components/NoDataPanel";
import { ResponsiveTimeRange } from "@nivo/calendar";
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
        <>
          <GridItem
            delay={exercisesQuery.data.length * delay}
            title="exercises count"
          >
            <RadarGraph exercises={exercisesQuery.data} />
          </GridItem>
          <GridItem
            delay={(exercisesQuery.data.length + 1) * delay}
            title="calendar"
          >
            <CalendarGraph />
          </GridItem>
        </>
      )}
    </Styles.Grid>
  );
};

const data = [
  {
    value: 34,
    day: "2018-07-31",
  },
  {
    value: 289,
    day: "2018-05-22",
  },
  {
    value: 217,
    day: "2018-05-11",
  },
  {
    value: 217,
    day: "2018-05-16",
  },
  {
    value: 133,
    day: "2018-06-15",
  },
  {
    value: 216,
    day: "2018-04-07",
  },
  {
    value: 103,
    day: "2018-07-20",
  },
  {
    value: 329,
    day: "2018-05-23",
  },
  {
    value: 155,
    day: "2018-06-03",
  },
  {
    value: 154,
    day: "2018-06-22",
  },
  {
    value: 119,
    day: "2018-07-30",
  },
  {
    value: 7,
    day: "2018-07-04",
  },
  {
    value: 166,
    day: "2018-06-12",
  },
  {
    value: 299,
    day: "2018-05-27",
  },
  {
    value: 10,
    day: "2018-06-27",
  },
  {
    value: 185,
    day: "2018-05-24",
  },
  {
    value: 310,
    day: "2018-06-10",
  },
  {
    value: 242,
    day: "2018-04-11",
  },
  {
    value: 39,
    day: "2018-07-16",
  },
  {
    value: 137,
    day: "2018-06-24",
  },
  {
    value: 222,
    day: "2018-08-11",
  },
  {
    value: 276,
    day: "2018-07-05",
  },
  {
    value: 244,
    day: "2018-04-03",
  },
  {
    value: 79,
    day: "2018-06-20",
  },
  {
    value: 104,
    day: "2018-05-09",
  },
  {
    value: 301,
    day: "2018-05-19",
  },
  {
    value: 215,
    day: "2018-04-16",
  },
  {
    value: 282,
    day: "2018-05-12",
  },
  {
    value: 357,
    day: "2018-06-19",
  },
  {
    value: 328,
    day: "2018-07-07",
  },
  {
    value: 107,
    day: "2018-04-23",
  },
  {
    value: 231,
    day: "2018-06-21",
  },
  {
    value: 315,
    day: "2018-04-27",
  },
  {
    value: 372,
    day: "2018-08-10",
  },
  {
    value: 178,
    day: "2018-08-03",
  },
  {
    value: 335,
    day: "2018-05-28",
  },
  {
    value: 53,
    day: "2018-04-09",
  },
  {
    value: 393,
    day: "2018-06-13",
  },
  {
    value: 342,
    day: "2018-06-04",
  },
  {
    value: 310,
    day: "2018-07-24",
  },
  {
    value: 226,
    day: "2018-05-03",
  },
  {
    value: 324,
    day: "2018-04-28",
  },
  {
    value: 127,
    day: "2018-07-22",
  },
  {
    value: 97,
    day: "2018-05-31",
  },
  {
    value: 161,
    day: "2018-05-30",
  },
  {
    value: 216,
    day: "2018-07-06",
  },
  {
    value: 85,
    day: "2018-07-10",
  },
  {
    value: 215,
    day: "2018-07-08",
  },
  {
    value: 142,
    day: "2018-05-18",
  },
  {
    value: 271,
    day: "2018-04-13",
  },
  {
    value: 213,
    day: "2018-04-20",
  },
  {
    value: 386,
    day: "2018-07-29",
  },
  {
    value: 343,
    day: "2018-07-02",
  },
  {
    value: 371,
    day: "2018-04-18",
  },
  {
    value: 356,
    day: "2018-04-12",
  },
  {
    value: 151,
    day: "2018-07-17",
  },
  {
    value: 223,
    day: "2018-05-06",
  },
  {
    value: 138,
    day: "2018-07-09",
  },
  {
    value: 215,
    day: "2018-07-03",
  },
  {
    value: 335,
    day: "2018-05-04",
  },
  {
    value: 148,
    day: "2018-08-09",
  },
  {
    value: 30,
    day: "2018-04-10",
  },
  {
    value: 183,
    day: "2018-05-29",
  },
  {
    value: 308,
    day: "2018-07-01",
  },
  {
    value: 250,
    day: "2018-08-02",
  },
  {
    value: 319,
    day: "2018-05-26",
  },
  {
    value: 196,
    day: "2018-04-01",
  },
  {
    value: 173,
    day: "2018-06-02",
  },
  {
    value: 154,
    day: "2018-04-14",
  },
  {
    value: 210,
    day: "2018-04-15",
  },
  {
    value: 2,
    day: "2018-06-28",
  },
  {
    value: 258,
    day: "2018-04-26",
  },
  {
    value: 108,
    day: "2018-08-08",
  },
  {
    value: 242,
    day: "2018-08-07",
  },
  {
    value: 106,
    day: "2018-06-23",
  },
  {
    value: 239,
    day: "2018-07-15",
  },
  {
    value: 95,
    day: "2018-06-29",
  },
  {
    value: 317,
    day: "2018-07-11",
  },
  {
    value: 163,
    day: "2018-04-19",
  },
  {
    value: 374,
    day: "2018-07-12",
  },
  {
    value: 2,
    day: "2018-08-04",
  },
  {
    value: 2,
    day: "2018-04-08",
  },
  {
    value: 43,
    day: "2018-07-21",
  },
  {
    value: 200,
    day: "2018-06-09",
  },
  {
    value: 90,
    day: "2018-04-30",
  },
  {
    value: 6,
    day: "2018-05-15",
  },
  {
    value: 313,
    day: "2018-07-13",
  },
  {
    value: 319,
    day: "2018-06-07",
  },
  {
    value: 105,
    day: "2018-04-05",
  },
  {
    value: 278,
    day: "2018-06-16",
  },
  {
    value: 360,
    day: "2018-08-05",
  },
  {
    value: 332,
    day: "2018-06-17",
  },
  {
    value: 83,
    day: "2018-05-14",
  },
];

const CalendarGraph = () => {
  return (
    <ResponsiveTimeRange
      data={data}
      from="2018-04-01"
      to="2018-08-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          justify: false,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
          translateX: -60,
          translateY: -60,
          symbolSize: 20,
        },
      ]}
    />
  );
};

export default GridOfExercises;
