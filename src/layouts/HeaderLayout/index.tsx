import { useSession } from "next-auth/react";
import * as Styles from "./index.styled";

const HeaderLayout = () => {
  const { data: session } = useSession();
  return (
    <Styles.Header>
      <Styles.Title>gym tracker</Styles.Title>
      {session?.user?.name && <Styles.Name>{session.user.name}</Styles.Name>}
      {session?.user?.image && <Styles.Avatar src={session.user.image} />}
    </Styles.Header>
  );
};

export default HeaderLayout;
