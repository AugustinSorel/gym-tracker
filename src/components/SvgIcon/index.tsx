import svgIcons from "src/utils/svgIcons";
import * as Styles from "./index.styled";

type Props = {
  svgName: keyof typeof svgIcons;
};

const SvgIcon = ({ svgName }: Props) => {
  return (
    <Styles.Svg>
      <path d={svgIcons[svgName]} />
    </Styles.Svg>
  );
};

export default SvgIcon;
