import "dotenv/config";

import { connect } from "mongoose";

async function dbConnect(): Promise<void> {
  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) {
    throw new Error("MONGO_URI must be provided");
  }

  try {
    await connect(MONGO_URI);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}

export default dbConnect;
