import dotEnv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
const app = express();
import { dbConnection } from "./database/connection.js";
dotEnv.config({ path: "./.env" });

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES IMPORT
import { UserApi } from "./components/index.js";

// ROUTES MAP
app.use("/users", UserApi);

const start = async () => {
  const { PORT, DB_NAME, DB_URI } = process.env;
  global.db = await dbConnection(DB_NAME, DB_URI);

  app.listen(PORT, () => {
    console.log(`Our server comunication lives on port ${PORT} 📡`);
  });
};

start();
