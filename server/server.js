import dotEnv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
const app = express();
import cors from "cors";
import { dbConnection } from "./database/connection.js";
dotEnv.config({ path: "./.env" });
// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
// ROUTES IMPORT
import { userApi, authApi } from "./components/index.js";

// ROUTES MAP
app.use("/users", userApi);
app.use("/auth", authApi);

const start = async () => {
  process.on("unhandledRejection", (reason, p) => {
    throw new AppError("UnhandledPromiseRejection", 500, reason.message, true);
  });

  process.on("uncaughtException", (error) => {
    if (error.isOperational) {
      throw new AppError("UncaughtException", 500, error.message, true);
    }
    process.exit(1);
  });

  const { PORT, DB_NAME, DB_URI } = process.env;
  global.db = await dbConnection(DB_NAME, DB_URI);

  app.listen(PORT, () => {
    console.log(`Our server comunication lives on port ${PORT} 📡`);
  });
};

start();
