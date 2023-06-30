import dotEnv from "dotenv";
import bcrypt from "bcrypt";
import { AppError } from "../Errors/CustomError.js";
import { commonErrors } from "../Errors/errorManagement.js";
dotEnv.config({ path: "./.env" });

const { BCRYPT_SALT_ROUND } = process.env;

export const hashBcrypt = async (userPassword) => {
  const salt = parseInt(BCRYPT_SALT_ROUND);
  if (!(userPassword && salt))
    throw new AppError(
      commonErrors.InvalidInput,
      undefined,
      "Invalid input, userPassword and salt are required",
      true
    );
  try {
    const hashedPassword = await bcrypt.hash(userPassword, salt);
    return hashedPassword;
  } catch (error) {
    throw new AppError(
      commonErrors.HashError,
      undefined,
      "Error hashing password, Something went wrong while hasing password",
      true
    );
  }
};
