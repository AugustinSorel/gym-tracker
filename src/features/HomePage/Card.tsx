import svgIcons from "src/utils/svgIcons";
import * as Styles from "./Card.styled";

type Props = {
  svgName: keyof typeof svgIcons;
  title: string;
  paragraph: string;
};

const Card = ({ paragraph, svgName, title }: Props) => {
  return (
    <Styles.ListItem>
      <Styles.Svg>
        <path d={svgIcons[svgName]} />
      </Styles.Svg>
      <Styles.ListItemTitle>{title}</Styles.ListItemTitle>
      <Styles.ListItemParagraph>{paragraph}</Styles.ListItemParagraph>
    </Styles.ListItem>
  );
};

export default Card;
