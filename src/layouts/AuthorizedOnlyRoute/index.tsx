import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AuthorizedOnlyRoute = ({ children }: Props) => {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated: () => router.push("/sign-in"),
  });

  if (status === "loading") {
    return null;
  }

  return <>{children}</>;
};

export default AuthorizedOnlyRoute;
