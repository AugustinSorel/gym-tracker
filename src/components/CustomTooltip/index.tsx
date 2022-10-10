import { getDateInFrenchFormat } from "src/utils/date";
import { TwoDigitsNumber } from "src/utils/math";
import * as Styles from "./index.styled";
import { PointTooltipProps } from "@nivo/line";

const CustomTooltip = ({ point }: PointTooltipProps) => {
  return (
    <Styles.Container>
      <Styles.Text>
        date: <strong>{getDateInFrenchFormat(point.data.x.toString())}</strong>
      </Styles.Text>
      <Styles.Text>
        one rep max:{" "}
        <strong>{TwoDigitsNumber(point.data.y as number)} kg</strong>
      </Styles.Text>
    </Styles.Container>
  );
};

export default CustomTooltip;
