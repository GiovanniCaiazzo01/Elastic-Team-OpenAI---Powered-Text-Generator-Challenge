import { Result } from "../../../utils/Result/Result.js";
import { hashBcrypt } from "../../../utils/index.js";
import { ERRORS } from "./errorMessages.js";
const { MISSING_FIELDS, GENERAL_ERROR } = ERRORS;

export const register = async ({ email, name, password }) => {
  if (!(email && name && password)) {
    return new Result(false, MISSING_FIELDS);
  }

  try {
    const hashedPassword = await hashBcrypt(password);
  } catch (error) {
    return new Result(false, GENERAL_ERROR);
  }

  return { result: true };
};
