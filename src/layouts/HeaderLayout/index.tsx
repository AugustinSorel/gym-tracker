import Button from "@/components/Button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import * as Styles from "./index.styled";

const HeaderLayout = () => {
  const { data: session } = useSession();

  const signOutHandler = () => {
    signOut({ redirect: true, callbackUrl: "/sign-in" });
  };

  return (
    <Styles.Header>
      <Styles.Title>
        <Link href={"/"} passHref>
          <Styles.Anchor>gym tracker</Styles.Anchor>
        </Link>
      </Styles.Title>
      <Button role="default" text="sign-out" onClick={signOutHandler} />
      {session?.user?.image && <Styles.Avatar src={session.user.image} />}
    </Styles.Header>
  );
};

export default HeaderLayout;
