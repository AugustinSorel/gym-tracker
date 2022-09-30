import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/src/component/DefaultTooltipContent";
import { getDateInFrenchFormat } from "src/utils/date";
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
        one rep max: <strong>{payload[0].payload.oneRepMax}</strong>
      </Styles.Text>
      <Styles.Text>
        predicted one rep max:{" "}
        <strong>{payload[0].payload.predictedOneRepMax}</strong>
      </Styles.Text>
    </Styles.Container>
  );
};

export default CustomTooltip;
