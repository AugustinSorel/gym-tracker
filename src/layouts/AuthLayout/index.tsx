import Anchor from "@/components/Anchor";
import { PropsWithChildren } from "react";
import * as Styles from "./index.styled";

const NavigationText = ({ isLogin }: { isLogin: boolean }) => {
  if (isLogin) {
    return (
      <Styles.NavigationText>
        Dont&apos;t have an account? <Anchor href={"/sign-up"} text="Sign Up" />
      </Styles.NavigationText>
    );
  }

  return (
    <Styles.NavigationText>
      Already a member? <Anchor href={"/login"} text="login" />
    </Styles.NavigationText>
  );
};

const Header = () => {
  return (
    <>
      <Styles.Title>Welcome back</Styles.Title>
      <Styles.SubTitle>Welcome back! Please enter your details</Styles.SubTitle>
    </>
  );
};

type Props = { isLogin: boolean } & PropsWithChildren;

const AuthLayout = ({ children, isLogin }: Props) => {
  return (
    <Styles.Container>
      <Styles.Main>
        <Header />

        {children}

        <NavigationText isLogin={isLogin} />
      </Styles.Main>

      <Styles.CircleScreen />
    </Styles.Container>
  );
};

export default AuthLayout;
