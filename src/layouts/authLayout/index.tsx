import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import * as Styles from "./index.styled";

type Props = {
  children: ReactElement;
};

const AuthLayout = ({ children }: Props) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (status === "authenticated") {
    router.push("/");
    return null;
  }

  return (
    <Styles.Container>
      <Styles.Main>{children}</Styles.Main>

      <Styles.CircleScreen />
    </Styles.Container>
  );
};

export default AuthLayout;
