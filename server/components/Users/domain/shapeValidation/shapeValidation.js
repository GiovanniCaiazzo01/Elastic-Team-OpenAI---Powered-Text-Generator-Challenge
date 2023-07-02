import {
  isPlainObject,
  checkObjectValueTypes,
} from "../../../../utils/index.js";
import { AppError } from "../../../../utils/index.js";

export const registerShape = async (user, types) => {
  try {
    await isPlainObject(user);
    await checkObjectValueTypes(user, types);
    return true;
  } catch (error) {
    console.log(error);
    throw new AppError(
      error.name,
      error.http,
      error.description,
      error.isOperational
    );
  }
};
