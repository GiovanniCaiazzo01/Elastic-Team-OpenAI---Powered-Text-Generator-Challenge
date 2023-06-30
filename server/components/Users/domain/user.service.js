import { Result } from "../../../utils/Result/Result.js";
import { hashBcrypt } from "../../../utils/index.js";
import { ERRORS } from "./errorMessages.js";
const { MISSING_FIELDS } = ERRORS;

export const register = async ({ email, name, password }) => {
  if (!(email && name && password)) {
    return new Result(false, MISSING_FIELDS);
  }

  return { result: true };
};
