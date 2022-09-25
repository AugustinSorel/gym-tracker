import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

type Props = {
  children: JSX.Element;
};

const PriveRouteLayout = ({ children }: Props) => {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated: () => router.push("/sign-in"),
  });

  if (status === "loading") {
    return null;
  }

  return children;
};

export default PriveRouteLayout;
