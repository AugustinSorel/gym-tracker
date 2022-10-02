import SvgIcon from "../SvgIcon";
import * as Styles from "./index.styled";

const NoDataPanel = () => {
  return (
    <Styles.Container>
      <SvgIcon svgName="monitoring" />
      <Styles.Text>no data</Styles.Text>
    </Styles.Container>
  );
};

export default NoDataPanel;
