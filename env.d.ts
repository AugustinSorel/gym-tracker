declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
      DATABASE_URL: string;
      ACCESS_TOKEN_KEY: string;
      REFRESH_TOKEN_KEY: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
    }
  }
}

export {};
