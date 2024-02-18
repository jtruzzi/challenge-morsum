import { createLogger } from "redux-logger";

export const loggerMiddleware = [
  createLogger({
    predicate: () => typeof window !== "undefined",
  }),
];
