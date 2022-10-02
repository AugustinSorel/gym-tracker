import Button from "@/components/Button";
import CustomTooltip from "@/components/CustomTooltip";
import NoDataPanel from "@/components/NoDataPanel";
import { TimeFrame, TIME_FRAME_ENUM } from "@/schemas/exerciseSchema";
import { Data } from "@prisma/client";
import { useRouter } from "next/router";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import theme from "src/styles/theme";
import { getDateInFrenchFormat } from "src/utils/date";
import { InferProcedures } from "src/utils/trpc";
import * as Styles from "./ExerciseGraph.styled";

const Skeleton = () => {
  return (
    <Styles.ContainerSkeleton>
      <Styles.HeaderSkeleton />
      <Styles.FooterSkeleton />
    </Styles.ContainerSkeleton>
  );
};

const Graph = ({ data }: { data: Data[] }) => {
  if (data.length < 1) {
    return <NoDataPanel />;
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={[...data]}
        margin={{ bottom: 10, left: -25, right: 20, top: 20 }}
      >
        <Line
          type="monotone"
          dataKey="oneRepMax"
          stroke={theme.colors.action}
          strokeWidth={2}
          dot={true}
        />
        {data.length > 0 && (
          <>
            <XAxis
              dataKey="createdAt"
              type="number"
              scale="time"
              tickFormatter={getDateInFrenchFormat}
              domain={[
                data[0].createdAt.getTime(),
                data[data.length - 1].createdAt.getTime(),
              ]}
            />
            <Tooltip content={<CustomTooltip />} />
            <YAxis />
            <Legend />
          </>
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

type Props = {
  isLoading: boolean;
  setSelectedTimeFrame: (timeFrame: TimeFrame) => void;
  selectedTimeFrame: TimeFrame;
  exercise?: InferProcedures["exercise"]["get"]["output"];
};

const ExerciseGraph = (props: Props) => {
  const { isLoading, exercise, selectedTimeFrame, setSelectedTimeFrame } =
    props;
  const router = useRouter();

  if (isLoading || !exercise) {
    return <Skeleton />;
  }

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.ExerciseName>{router.query.exerciseName}</Styles.ExerciseName>
      </Styles.Header>

      <Graph data={exercise.Data} />

      <Styles.Footer>
        {TIME_FRAME_ENUM.map((text) => (
          <Button
            key={text}
            role="default"
            text={text}
            onClick={() => setSelectedTimeFrame(text)}
            style={
              selectedTimeFrame === text
                ? {
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }
                : {}
            }
          />
        ))}
      </Styles.Footer>
    </Styles.Container>
  );
};

export default ExerciseGraph;
