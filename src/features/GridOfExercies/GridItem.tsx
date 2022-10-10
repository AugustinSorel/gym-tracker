import { ReactNode } from "react";
import * as Styles from "./GridItem.styled";

type Props = {
  children: ReactNode;
  title: string;
  delay: number;
};

const GridItem = ({ title, children, delay }: Props) => {
  return (
    <Styles.Container delay={delay} tabIndex={0}>
      <Styles.Header>
        <Styles.ExerciseName>{title}</Styles.ExerciseName>
      </Styles.Header>

      {children}
    </Styles.Container>
  );
};

export default GridItem;
