import "reflect-metadata";
import "dotenv/config";
import * as express from "express";
import * as cors from "cors";
import * as path from "path";

import "./container";
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/stream", express.static(path.join(__dirname, "tmp")));

app.use(cors());
app.use(router);

export { app };
