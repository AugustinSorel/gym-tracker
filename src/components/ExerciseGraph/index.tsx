import * as Styles from "./index.styled";
import { Legend, Line, LineChart, ResponsiveContainer } from "recharts";
import data from "src/utils/toDelete";
import theme from "src/styles/theme";
import { memo } from "react";
import { useRouter } from "next/router";
import Button from "../Button";

// TODO: FETCH the exericse with placeholder ?
const ExerciseGraph = () => {
  const router = useRouter();
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.ExerciseName>{router.query.exerciseName}</Styles.ExerciseName>
      </Styles.Header>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data()}>
          <Line
            type="monotone"
            dataKey="actual"
            stroke={theme.colors.action}
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke={theme.colors[400]}
            strokeWidth={2}
            dot={false}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>

      <Styles.Footer>
        <Button role="default" text="ALL" />
        <Button role="default" text="1Y" />
        <Button role="default" text="6M" />
        <Button role="default" text="1M" />
        <Button role="default" text="1W" />
      </Styles.Footer>
    </Styles.Container>
  );
};

export default memo(ExerciseGraph);
