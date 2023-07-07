import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { dbConnection } from "./database/connection.js";
import { userApi, authApi, chatApi } from "./components/index.js";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT;
const DB_NAME = process.env.DB_NAME;
const DB_URI = process.env.DB_URI;

//MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());

// ROUTES
app.use("/users", userApi);
app.use("/auth", authApi);
app.use("/chat", chatApi);

const startServer = async () => {
  try {
    global.db = await dbConnection(DB_NAME, DB_URI);
    app.listen(PORT, () => {
      console.log(`Our server communication lives on port ${PORT} 📡`);
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
