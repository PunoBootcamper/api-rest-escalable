import express from "express";

import expressConfig from "./config/express";
import { router } from "./routes";
import db from "./config/mongo";

const app = express();
expressConfig(app);
app.use("/api", router);

db().then(() => console.log("Connected to MongoDB"));

export default app;
