import Link from "next/link";
import { useState } from "react";
import { Legend, Line, LineChart, ResponsiveContainer } from "recharts";
import theme from "src/styles/theme";
import { InferProcedures } from "src/utils/trpc";
import * as Styles from "./GridItem.styled";

type Props = {
  exercise: NonNullable<InferProcedures["exercise"]["get"]["output"]>;
  delay: number;
};

const GridItem = ({ exercise, delay }: Props) => {
  const [data] = useState(exercise.data);

  return (
    <Link href={`/exercise/${exercise.id}`} passHref>
      <Styles.Anchor delay={delay}>
        <Styles.Container>
          <Styles.Header>
            <Styles.ExerciseName>{exercise.name}</Styles.ExerciseName>
          </Styles.Header>

          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ bottom: 10, left: 10, right: 10, top: 10 }}
            >
              <Line
                type="monotone"
                dataKey="oneRepMax"
                stroke={theme.colors.action}
                strokeWidth={2}
                dot={false}
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
