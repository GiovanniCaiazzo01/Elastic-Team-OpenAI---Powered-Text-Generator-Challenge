import { AppError } from "../Errors/CustomError.js";
import { commonErrors } from "../Errors/errorManagement.js";
export const isPlainObject = async (obj) => {
  return await new Promise((resolve, reject) => {
    const result =
      typeof obj === "object" && obj !== null && obj.constructor === Object;
    result
      ? resolve(result)
      : reject({
          name: commonErrors.ShapeError,
          http: undefined,
          description: `Invalid Shape element, expected an object but got a ${typeof user}`,
          isOperational: true,
        });
  });
};

export const checkObjectValueTypes = async (obj, types) => {
  return await new Promise((resolve, reject) => {
    for (const key in types) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] !== types[key]) {
          reject({
            name: commonErrors.InvalidKeyTypes,
            http: "none",
            description: `Invalid Keys Types, typeof ${key} should be ${
              types[key]
            } but got ${typeof obj[key]} `,
            isOperational: true,
          });
        }
      }
    }
    resolve(true);
  });
};

export const objShapeValidation = async (obj, types) => {
  try {
    await isPlainObject(obj);
    await checkObjectValueTypes(obj, types);
    return true;
  } catch (error) {
    throw new AppError(
      error.name,
      error.http,
      error.description,
      error.isOperational
    );
  }
};
