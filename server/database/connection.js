import { MongoClient } from "mongodb";
import { AppError } from "../utils/index.js";

const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

export const dbConnection = async (DB_NAME, DB_URI) => {
  try {
    console.log("We are docking with mongodb atlas supply spacecraft...🚀 ");
    const client = await MongoClient.connect(DB_URI, OPTIONS);
    const db = client.db(DB_NAME);
    console.log(
      "Its ok 🫶, server successfully docked with the mongodb atlas supply spacecraft 🛰️."
    );
    return db;
  } catch (error) {
    new AppError(
      "Panic Panic Panic a comet ☄️ destroyed our connection with mongodb atlas supply spacecraft.",
      "none",
      "womething goes wrong with the Db connection",
      true
    );
  }
};
