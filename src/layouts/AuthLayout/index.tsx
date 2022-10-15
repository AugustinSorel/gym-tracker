import { ReactElement } from "react";
import * as Styles from "./index.styled";

type Props = {
  children: ReactElement;
};

// FIXME: Rename this to circle layout
const AuthLayout = ({ children }: Props) => {
  return (
    <Styles.Container>
      <Styles.Main>{children}</Styles.Main>

      <Styles.CircleScreen />
    </Styles.Container>
  );
};

export default AuthLayout;
