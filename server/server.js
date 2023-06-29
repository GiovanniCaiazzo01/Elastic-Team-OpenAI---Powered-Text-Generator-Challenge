import bodyParser from "body-parser";
import express from "express";
const app = express();
import dotEnv from "dotenv";
dotEnv.config({ path: "./.env" });

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES IMPORT
import { UserApi } from "./components/index.js";

// ROUTES MAP
app.use("/users", UserApi);
const start = () => {
  const { PORT } = process.env;
  app.listen(PORT, () => {
    console.log(`sono vivo sulla porta ${PORT}`);
  });
};

start();
