import {
  isPlainObject,
  checkObjectValueTypes,
} from "../../../../utils/index.js";
import { AppError } from "../../../../utils/index.js";

export const registerShape = async (user, types) => {
  try {
    await isPlainObject(user);
    await checkObjectValueTypes(user, types);
  } catch (error) {
    throw new AppError(
      error.name,
      error.http,
      error.description,
      error.isOperational
    );
  }
};
