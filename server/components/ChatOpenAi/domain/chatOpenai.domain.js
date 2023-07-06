import { Result, objShapeValidation } from "../../../utils/index.js";
import { ERRORS } from "./errorMessages.js";
import { getResponse } from "./utils/getResponse.js";

export const userQuestion = async (payload) => {
  const { question } = payload;

  if (!question) {
    return new Result(false, ERRORS.MISSING_QUESTION);
  }

  const TYPES = {
    question: "string",
  };

  try {
    await objShapeValidation({ question }, TYPES);
    const openAiAnswer = await getResponse(question);
    return new Result(true, "none", openAiAnswer);
  } catch (error) {
    return new Result(false, "qualcosa è andato malissimo");
  }
};
