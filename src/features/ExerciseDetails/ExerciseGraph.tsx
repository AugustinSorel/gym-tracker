import Button from "@/components/Button";
import CustomTooltip from "@/components/CustomTooltip";
import SvgIcon from "@/components/SvgIcon";
import { TimeFrame, TIME_FRAME_ENUM } from "@/schemas/exerciseSchema";
import { useRouter } from "next/router";
import { useState } from "react";
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
import { trpc } from "src/utils/trpc";
import * as Styles from "./ExerciseGraph.styled";

const ExerciseGraph = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>("1M");

  const router = useRouter();
  const utils = trpc.useContext();

  const exerciseName = router.query.exerciseName as string;

  const dataQuery = trpc.exercise.get.useQuery(
    {
      exerciseName,
      timeFrame: selectedTimeFrame,
    },
    {
      placeholderData: () => {
        if (selectedTimeFrame === "1M") {
          return utils.exercise.all
            .getData()
            ?.find((d) => d.name === exerciseName);
        }

        return undefined;
      },
    }
  );

  if (dataQuery.isLoading || !dataQuery.data) {
    return (
      <Styles.ContainerSkeleton>
        <Styles.HeaderSkeleton />
        <Styles.FooterSkeleton />
      </Styles.ContainerSkeleton>
    );
  }

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.ExerciseName>{exerciseName}</Styles.ExerciseName>
      </Styles.Header>

      {dataQuery.data.Data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={[...dataQuery.data.Data]}
            margin={{ bottom: 10, left: -25, right: 20, top: 20 }}
          >
            <Line
              type="monotone"
              dataKey="oneRepMax"
              stroke={theme.colors.action}
              strokeWidth={2}
              dot={true}
            />
            {/* <Line
                type="monotone"
                dataKey="predictedOneRepMax"
                stroke={theme.colors[400]}
                strokeWidth={2}
                dot={false}
              /> */}
            {dataQuery.data.Data.length > 0 && (
              <>
                <XAxis
                  dataKey="createdAt"
                  type="number"
                  scale="time"
                  tickFormatter={getDateInFrenchFormat}
                  domain={[
                    dataQuery.data.Data[0].createdAt.getTime(),
                    dataQuery.data.Data[
                      dataQuery.data.Data.length - 1
                    ].createdAt.getTime(),
                  ]}
                />
                <Tooltip content={<CustomTooltip />} />
                <YAxis />
                <Legend />
              </>
            )}
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <>
          <SvgIcon svgName="graph" />
          <Styles.NoDataText>no data</Styles.NoDataText>
        </>
      )}

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
