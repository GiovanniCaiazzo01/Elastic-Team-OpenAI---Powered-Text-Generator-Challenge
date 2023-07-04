import dotEnv from "dotenv";
import jwt from "jsonwebtoken";
import { AppError } from "../Errors/CustomError.js";
import { commonErrors } from "../Errors/errorManagement.js";

dotEnv.config({ path: "./.env" });

const { JWT_SECRET } = process.env;

export const verifyJwt = async (jwtToken, data) => {
  try {
    // quando il token è expired solleva un eccezzione, va fatto una callback nel verify
    // e se il token è expired richiamre makeJwt e creare il token per poi restiturirlo
    return jwt.verify(jwtToken, JWT_SECRET, function (err, decoded) {
      if (err?.name === "TokenExpiredError") {
        return false;
      }
      return true;
    });
  } catch (error) {
    throw new AppError(error.name, "none", error.message, true);
  }
};

export const makeJwt = async (data) => {
  try {
    return jwt.sign(data, JWT_SECRET, { expiresIn: "30s" });
  } catch (error) {
    throw new AppError(
      commonErrors.JwtError,
      "none",
      `Error sign Jwt Token, something went wrong while sign jwt with data: ${data}`,
      true
    );
  }
};
