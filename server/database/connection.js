import { MongoClient } from "mongodb";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

export const dbConnection = async (DB_NAME, DB_URI) => {
  try {
    console.log("We are docking with mongodb atlas supply spacecraft...🚀 ");
    const client = await MongoClient.connect(DB_URI, options);
    const db = client.db(DB_NAME);
    console.log(
      "Its ok 🫶, server successfully docked with the mongodb atlas supply spacecraft 🛰️."
    );
    return db;
  } catch (error) {
    throw console.log(
      "Panic Panic Panic a comet ☄️ destroyed our connection with mongodb atlas supply spacecraft."
    );
  }
};
