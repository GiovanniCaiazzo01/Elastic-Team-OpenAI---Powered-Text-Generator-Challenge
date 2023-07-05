import { decryptBcrypt } from "../../../utils/Bcrypt/bcrypt.utils.js";
import { verifyJwt } from "../../../utils/Jwt/jwt.utils.js";
import { Result, objShapeValidation } from "../../../utils/index.js";
import {
  getUserByEmail,
  updateUserToken,
} from "../data-access/authUser.repository.js";

import { ERRORS } from "./errorMessages.js";
const { MISSING_FIELDS, WRONG_CREDENTIALS, HAVE_FUN, GENERAL_ERROR } = ERRORS;

export const login = async (user) => {
  const { email, password } = user;

  if (!(email && password)) return new Result(false, MISSING_FIELDS);

  const userPayload = {
    email,
    password,
  };

  const TYPES = {
    email: "string",
    password: "string",
  };

  try {
    await objShapeValidation(userPayload, TYPES);
    const raw_user = await getUserByEmail(email);

    if (!raw_user) {
      return new Result(false, WRONG_CREDENTIALS);
    }

    const isCorrectPassword = await decryptBcrypt(password, raw_user.password);
    if (!isCorrectPassword) {
      return new Result(false, WRONG_CREDENTIALS);
    }

    if (!raw_user.jwt_token) {
      return (
        (await updateUserToken(raw_user)) &&
        new Result(true, HAVE_FUN, {
          fullName: raw_user.fullName,
          email: raw_user.email,
          ucode: raw_user.ucode,
          jwt_token: raw_user.jwt_token,
        })
      );
    }
    const isValidJwt = await verifyJwt(raw_user.jwt_token, raw_user);
    if (!isValidJwt) {
      return (
        (await updateUserToken(raw_user)) &&
        new Result(true, HAVE_FUN, {
          fullName: raw_user.fullName,
          email: raw_user.email,
          ucode: raw_user.ucode,
          jwt_token: raw_user.jwt_token,
        })
      );
    }

    return new Result(true, HAVE_FUN, {
      fullName: raw_user.fullName,
      email: raw_user.email,
      ucode: raw_user.ucode,
      jwt_token: raw_user.jwt_token,
    });
  } catch (error) {
    return new Result(false, GENERAL_ERROR);
  }
};
