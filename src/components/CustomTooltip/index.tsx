import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/src/component/DefaultTooltipContent";
import { getDateInFrenchFormat } from "src/utils/date";
import { TwoDigitsNumber } from "src/utils/math";
import * as Styles from "./index.styled";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <Styles.Container>
      <Styles.Text>
        date: <strong>{getDateInFrenchFormat(label)}</strong>
      </Styles.Text>
      <Styles.Text>
        one rep max:{" "}
        <strong>{TwoDigitsNumber(payload[0].payload.oneRepMax ?? 0)}</strong>
      </Styles.Text>
      <Styles.Text>
        predicted one rep max:{" "}
        <strong>
          {TwoDigitsNumber(payload[0].payload.predictedOneRepMax ?? 0)}
        </strong>
      </Styles.Text>
    </Styles.Container>
  );
};

export default CustomTooltip;
