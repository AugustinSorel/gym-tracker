import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const UnauthorizedOnlyRoute = ({ children }: Props) => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return null;
  }

  if (status === "authenticated") {
    router.push("/dashboard");
    return null;
  }

  return <> {children}</>;
};

export default UnauthorizedOnlyRoute;
