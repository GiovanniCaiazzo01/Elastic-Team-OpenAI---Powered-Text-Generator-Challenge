import {
  v4 as uuidv4,
  version as uuidVersion,
  validate as uuidValidate,
} from "uuid";
import { commonErrors } from "../Errors/errorManagement.js";
import { AppError } from "../Errors/CustomError.js";

export const generateUID = async () => {
  const uuid = uuidv4();
  const isValidUuid = uuidValidate(uuid) && uuidVersion(uuid) === 4;

  if (!isValidUuid) {
    throw new AppError(
      commonErrors.UuidvError,
      "none",
      "Error creating UUIDV, there was an unknow error during the uuidv creation",
      true
    );
  }
  return uuid;
};
