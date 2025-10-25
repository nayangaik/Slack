import * as Sentry from "@sentry/node";
import { ENV } from "./config/env.js";

const options = {
  dsn: ENV.SENTRY_DSN || "",
  tracesSampleRate: 1.0,
  environment: ENV.NODE_ENV || "development",
  integrations: [
    new Sentry.Integrations.Express()
  ]
};

Sentry.init(options);