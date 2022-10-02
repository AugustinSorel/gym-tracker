import Link from "next/link";
import { Legend, Line, LineChart, ResponsiveContainer } from "recharts";
import theme from "src/styles/theme";
import { InferProcedures } from "src/utils/trpc";
import * as Styles from "./GridItem.styled";

type Props = {
  exercise: NonNullable<InferProcedures["exercise"]["get"]["output"]>;
  delay: number;
};

const GridItem = ({ exercise, delay }: Props) => {
  return (
    <Link href={`/exercise/${exercise.name}`} passHref>
      <Styles.Anchor delay={delay}>
        <Styles.Container>
          <Styles.Header>
            <Styles.ExerciseName>{exercise.name}</Styles.ExerciseName>
          </Styles.Header>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={exercise.Data}
              margin={{ bottom: 10, left: 10, right: 10, top: 10 }}
            >
              <Line
                type="monotone"
                dataKey="oneRepMax"
                stroke={theme.colors.action}
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
              <Line
                type="monotone"
                dataKey="predictedOneRepMax"
                stroke={theme.colors[400]}
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </Styles.Container>
      </Styles.Anchor>
    </Link>
  );
};

export default GridItem;
