import { TimeFrame, TIME_FRAME_ENUM } from "@/schemas/exerciseSchema";
import { useRouter } from "next/router";
import { memo, useState } from "react";
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
import Button from "../Button";
import CustomTooltip from "../CustomTooltip";
import SvgIcon from "../SvgIcon";
import * as Styles from "./index.styled";

const Footer = ({
  setSelectedTimeFrame,
  selectedTimeFrame,
}: {
  setSelectedTimeFrame: (timeFrame: TimeFrame) => void;
  selectedTimeFrame: TimeFrame;
}) => {
  return (
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
  );
};

// TODO: loading skeleton baby
const ExerciseGraph = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>("1M");

  const router = useRouter();
  const utils = trpc.useContext();
  const exerciseName = (router.query.exerciseName ?? [""])[0] as string;

  const dataQuery = trpc.exercise.get.useQuery(
    {
      exerciseName,
      timeFrame: selectedTimeFrame,
    },
    {
      placeholderData: utils.exercise.all
        .getData()
        ?.find((d) => d.name === exerciseName),
    }
  );

  // TODO: make this look nicer
  if (dataQuery.isLoading || !dataQuery.data) {
    return <p>Loading...</p>;
  }

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.ExerciseName>{router.query.exerciseName}</Styles.ExerciseName>
      </Styles.Header>

      {dataQuery.data.Data.length === 0 ? (
        <>
          <SvgIcon svgName="graph" />
          <Styles.NoDataText>no data</Styles.NoDataText>
        </>
      ) : (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={dataQuery.data.Data}
              margin={{ bottom: 10, left: -25, right: 20, top: 20 }}
            >
              <Line
                type="monotone"
                dataKey="oneRepMax"
                stroke={theme.colors.action}
                strokeWidth={2}
                dot={true}
              />
              <Line
                type="monotone"
                dataKey="predictedOneRepMax"
                stroke={theme.colors[400]}
                strokeWidth={2}
                dot={false}
              />
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
            </LineChart>
          </ResponsiveContainer>

          <Footer
            selectedTimeFrame={selectedTimeFrame}
            setSelectedTimeFrame={setSelectedTimeFrame}
          />
        </>
      )}
    </Styles.Container>
  );
};

export default memo(ExerciseGraph);
