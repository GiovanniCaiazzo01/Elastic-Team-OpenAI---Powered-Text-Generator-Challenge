import dotEnv from "dotenv";
import bcrypt from "bcrypt";
import { AppError } from "../Errors/CustomError.js";
import { commonErrors } from "../Errors/errorManagement.js";
dotEnv.config({ path: "./.env" });

const { BCRYPT_SALT_ROUND } = process.env;

export const hashBcrypt = async (string) => {
  const salt = parseInt(BCRYPT_SALT_ROUND);
  if (!(string && salt)) {
    throw new AppError(
      commonErrors.InvalidInput,
      "none",
      "Missing or Invalid input, string and salt are required",
      true
    );
  }
  const hashedString = bcrypt.hash(string, salt);
  return hashedString;
};

export const decryptBcrypt = async (incomingString, hashedString) => {
  if (!(incomingString && hashedString)) {
    throw new AppError(
      commonErrors.InvalidInput,
      "none",
      `Missing or Invalid input, incomingString => ${incomingString}  and hashedString => ${hashedString} are required`,
      true
    );
  }
  const isValid = await bcrypt.compare(incomingString, hashedString);
  return isValid;
};
