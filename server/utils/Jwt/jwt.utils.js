import dotEnv from "dotenv";
import jwt from "jsonwebtoken";
import { AppError } from "../Errors/CustomError.js";
import { commonErrors } from "../Errors/errorManagement.js";

dotEnv.config({ path: "./.env" });

const { JWT_SECRET } = process.env;

export const verifyJwt = async (jwtToken) => {
  try {
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
  const { fullName, ucode, email } = data;
  try {
    return jwt.sign({ fullName, ucode, email }, JWT_SECRET, {
      expiresIn: "1h",
    });
  } catch (error) {
    throw new AppError(
      commonErrors.JwtError,
      "none",
      `Error sign Jwt Token, something went wrong while sign jwt with data: ${data}`,
      true
    );
  }
};
