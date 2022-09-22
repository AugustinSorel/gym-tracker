import { ReactElement } from "react";
import * as Styles from "./index.styled";

type Props = {
  children: ReactElement;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <Styles.Container>
      <Styles.Main>{children}</Styles.Main>

      <Styles.CircleScreen />
    </Styles.Container>
  );
};

export default AuthLayout;
