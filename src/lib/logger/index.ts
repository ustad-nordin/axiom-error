import { AXIOM_TOKEN, AXIOM_DATASET } from '$env/static/private';
import pino from "pino";

const logLevel = process.env.LOG_LEVEL || "info";

function createLogger(name?: string) {
  const logger = pino(
    { level: logLevel, name },
    pino.transport({
      target: "@axiomhq/pino",
      options: {
        dataset: AXIOM_DATASET,
        token: AXIOM_TOKEN,
      },
    })
  );

  return logger;
}

const logger = createLogger();

export default logger;

