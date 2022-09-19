import { CredentialResponse } from "google-one-tap";
import { useEffect } from "react";
import { decode } from "src/utils/jwt";

declare global {
  const google: typeof import("google-one-tap");
}

const useGoogleAuth = () => {
  const handleCallbackResponse = (res: CredentialResponse) => {
    const userPayload = decode(res.credential);
    console.log(userPayload);
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
