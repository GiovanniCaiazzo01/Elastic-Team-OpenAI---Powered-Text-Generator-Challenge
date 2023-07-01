import { Result } from "../../../utils/Result/Result.js";
import { hashBcrypt } from "../../../utils/index.js";
import { generateUID } from "../../../utils/uiid/uiid.utils.js";
import { ERRORS } from "./errorMessages.js";
import { registerShape } from "./shapeValidation/shapeValidation.js";
const { MISSING_FIELDS, GENERAL_ERROR } = ERRORS;

export const register = async ({ email, name, password }) => {
  if (!(email && name && password)) {
    return new Result(false, MISSING_FIELDS);
  }

  try {
    const hashedPassword = await hashBcrypt(password);
    const ucode = await generateUID();
    const date = Date.now();

    const user = {
      name,
      email,
      password: hashedPassword,
      ucode,
      sign_up_date: date,
    };

    const types = {
      name: "string",
      email: "string",
      password: "string",
      ucode: "string",
      sign_up_date: "number",
    };

    await registerShape(user, types);
  } catch (error) {
    return new Result(false, GENERAL_ERROR);
  }

  return { result: true };
};
