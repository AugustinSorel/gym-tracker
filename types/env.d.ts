declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      GOOGLE_CLIENT_SECRET: string;
      GOOGLE_CLIENT_ID: string;
      EMAIL_SERVER_USER: string;
      EMAIL_SERVER_PASSWORD: string;
      EMAIL_SERVER_HOST: string;
      EMAIL_SERVER_PORT: number;
      EMAIL_FROM: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      NODE_ENV: "development" | "production";
      PORT?: string;
    }
  }
}

export {};
