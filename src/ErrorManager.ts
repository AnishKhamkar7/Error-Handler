import { error } from "console";
import { Request, Response, NextFunction } from "express";
import { createLogger, format, transports } from "winston";
import { statusMap, StatusMeaning } from "./status";

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
};

const logger = createLogger({
  levels,
  format: format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new transports.File({ filename: "error.log", level: "error" }),
    new transports.File({ filename: "combined.log" }),
  ],
});

class CustomErrors<T> extends Error {
  status: StatusMeaning;
  data?: T;

  constructor(message: string, status: StatusMeaning, data?: T) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export default class ErrorManager {
  static handle(fn: AsyncFunction) {
    return (req: Request, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  }

  static;
}
