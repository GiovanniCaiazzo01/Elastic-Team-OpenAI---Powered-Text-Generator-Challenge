import { Result } from "../../../utils/Result/Result.js";
import { hashBcrypt } from "../../../utils/index.js";
import { generateUID } from "../../../utils/uiid/uiid.utils.js";
import {
  addUser,
  checkDuplicatedUser,
} from "../data-access/user.repository.js";
import { ERRORS } from "./errorMessages.js";
import { registerShape } from "./shapeValidation/shapeValidation.js";
import { SUCCESS } from "./successMessages.js";
const { MISSING_FIELDS, REGISTRATION_FAILED, DUPLICATE_EMAIL, GENERAL_ERROR } =
  ERRORS;
const { REGISTRATION_SUCCESS } = SUCCESS;
import dayjs from "dayjs";

export const register = async ({ email, name, password }) => {
  name = name.trim();
  email = email.trim();
  password = password.trim();

  if (!(email && name && password)) {
    return new Result(false, MISSING_FIELDS);
  }

  try {
    // fatto
    const isDuplicated = await checkDuplicatedUser(email);
    if (isDuplicated) return new Result(false, DUPLICATE_EMAIL);
    //fatto
    const hashedPassword = await hashBcrypt(password);
    // fatto
    const ucode = await generateUID();

    const user = {
      name,
      email,
      password: hashedPassword,
      ucode,
      sign_up_date: dayjs().format("YYYY-MM-DD"),
    };

    const types = {
      name: "string",
      email: "string",
      password: "string",
      ucode: "string",
      sign_up_date: "string",
    };

    await registerShape(user, types);

    const addResult = await addUser(user);

    return addResult
      ? new Result(true, REGISTRATION_SUCCESS)
      : new Result(false, REGISTRATION_FAILED);
  } catch (error) {
    return new Result(false, GENERAL_ERROR);
  }
};
