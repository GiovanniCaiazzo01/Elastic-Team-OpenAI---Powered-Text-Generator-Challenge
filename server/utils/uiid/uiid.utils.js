import { v4 as uuidv4 } from "uuid";
import { AppError } from "../Errors/CustomError.js";
import { commonErrors } from "../Errors/errorManagement.js";

export const generateUID = async () => {
  return await new Promise((resolve, reject) => {
    const uiid = uuidv4();
    uiid ? resolve(uiid) : reject(uiid);
  });
};
