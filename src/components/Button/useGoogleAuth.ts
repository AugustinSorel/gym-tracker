import { CredentialResponse } from "google-one-tap";
import { useEffect } from "react";
import { decode } from "src/utils/jwt";
import trpc from "src/utils/trpc";
import { GoogleAuthInput } from "@/schemas/authSchemas";
import { useRouter } from "next/router";

declare global {
  const google: typeof import("google-one-tap");
}

const useGoogleAuth = () => {
  const router = useRouter();
  const googleMutation = trpc.auth.google.useMutation({
    onSuccess: () => {
      router.push("/");
    },
  });

  const handleCallbackResponse = (res: CredentialResponse) => {
    const userPayload = decode<GoogleAuthInput>(res.credential);
    googleMutation.mutate(userPayload);
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleAuthButton")!,
      {
        theme: "filled_black",
        size: "large",
      }
    );

    google.accounts.id.prompt();
  }, []);
};

export default useGoogleAuth;
