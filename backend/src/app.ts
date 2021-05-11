import "reflect-metadata";
import "dotenv/config";
import * as express from "express";
import "express-async-errors";
import { Request, Response, NextFunction } from "express";
import * as cors from "cors";
import * as path from "path";

import "./container";
import "./database";
import { router } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/stream", express.static(path.resolve(__dirname, "tmp")));

app.use(cors());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).send();
    }
    return response.status(500).send();
  }
);

export { app };
