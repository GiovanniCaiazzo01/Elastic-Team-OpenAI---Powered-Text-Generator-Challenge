import bcrypt from "bcrypt";
import { AppError } from "../Errors/CustomError.js";
import { commonErrors } from "../Errors/errorManagement.js";

export const hashBcrypt = async (userPassword) => {
  const salt = undefined;
  if (!(userPassword && salt))
    throw new AppError(
      commonErrors.InvalidInput,
      undefined,
      "Invalid input: userPassword and salt are required",
      true
    );
  try {
    const hashedPassword = await bcrypt.hash(userPassword, 10);
    return hashedPassword;
  } catch (error) {
    throw new AppError(
      commonErrors.HashError,
      undefined,
      "Error hashing password: Something went wrong while hasing password",
      true
    );
  }
};
