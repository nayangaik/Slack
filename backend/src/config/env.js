import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), "src", ".env") });

export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  CLERK_PUBLISHABLE_KEY :process.env.CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY :process.env.CLERK_SECRET_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_SECRET_KEY: process.env.STREAM_SECRET_KEY,
  NODE_ENV: process.env.NODE_ENV,
  SENTRY_DSN: process.env.SENTRY_DSN, 
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
};