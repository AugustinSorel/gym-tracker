import { ResponsiveLine } from "@nivo/line";
import Link from "next/link";
import theme from "src/styles/theme";
import serializeGraphData from "src/utils/graph";
import { InferProcedures } from "src/utils/trpc";
import * as Styles from "./GridItem.styled";

//FIXME: removed unused dependencies

type Props = {
  exercise: NonNullable<InferProcedures["exercise"]["get"]["output"]>;
  delay: number;
};

const GridItem = ({ exercise, delay }: Props) => {
  return (
    <Link href={`/exercise/${exercise.id}`} passHref>
      <Styles.Anchor delay={delay}>
        <Styles.Container>
          <Styles.Header>
            <Styles.ExerciseName>{exercise.name}</Styles.ExerciseName>
          </Styles.Header>

          {exercise.data.length > 0 && (
            <div>
              <ResponsiveLine
                data={serializeGraphData(exercise.data)}
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
                curve="catmullRom"
              />
            </div>
          )}
        </Styles.Container>
      </Styles.Anchor>
    </Link>
  );
};

export default GridItem;
