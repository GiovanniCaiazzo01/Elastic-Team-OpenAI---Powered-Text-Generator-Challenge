import { Result } from "../../../utils/Result/Result.js";
import { hashBcrypt } from "../../../utils/index.js";
import { generateUID } from "../../../utils/uiid/uiid.utils.js";
import { addUser, getUserByEmail } from "../data-access/user.repository.js";
import { ERRORS } from "./errorMessages.js";
import { registerShape } from "./shapeValidation/shapeValidation.js";
import { SUCCESS } from "./successMessages.js";
const { MISSING_FIELDS, REGISTRATION_FAILED, DUPLICATE_EMAIL, GENERAL_ERROR } =
  ERRORS;
const { REGISTRATION_SUCCESS } = SUCCESS;
import dayjs from "dayjs";

export const register = async (user) => {
  const { email, fullName, password } = user;

  if (!(email && fullName && password)) {
    return new Result(false, MISSING_FIELDS);
  }

  fullName = fullName.trim();
  email = email.trim();
  password = password.trim();

  try {
    const userPayload = {
      fullName,
      email,
      password,
      ucode,
      sign_up_date: dayjs().format("YYYY-MM-DD"),
    };

    const TYPES = {
      fullName: "string",
      email: "string",
      password: "string",
      ucode: "string",
      sign_up_date: "string",
    };

    await registerShape(userPayload, TYPES);

    const isDuplicated = await getUserByEmail(email);
    if (isDuplicated) return new Result(false, DUPLICATE_EMAIL);
    const hashedPassword = await hashBcrypt(password);
    userPayload.password = hashedPassword;
    const ucode = await generateUID();

    const addResult = await addUser(userPayload);

    return addResult
      ? new Result(true, REGISTRATION_SUCCESS)
      : new Result(false, REGISTRATION_FAILED);
  } catch (error) {
    return new Result(false, GENERAL_ERROR);
  }
};
