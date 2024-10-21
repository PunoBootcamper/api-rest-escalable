import express from "express";
import cors from "cors";
import type { Application } from "express";

function expressConfig(app: express.Application) {
  app.use(cors());
  app.use(express.json());
}

export default expressConfig;
