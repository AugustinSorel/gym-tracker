import * as Styles from "./index.styled";
import { Legend, Line, LineChart, ResponsiveContainer } from "recharts";
import data from "src/utils/toDelete";
import theme from "src/styles/theme";
import { memo } from "react";

// TODO: FETCH the exericse with placeholder ?
const ExerciseGraph = () => {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.ExerciseName>Bench Press</Styles.ExerciseName>
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
        <Styles.TimeText>all</Styles.TimeText>
        <Styles.TimeText>1y</Styles.TimeText>
        <Styles.TimeText>6m</Styles.TimeText>
        <Styles.TimeText>1m</Styles.TimeText>
        <Styles.TimeText>1w</Styles.TimeText>
      </Styles.Footer>
    </Styles.Container>
  );
};

export default memo(ExerciseGraph);
