import dotEnv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import { AppError, commonErrors } from "../../../../utils/index.js";
dotEnv.config({ path: "../../../.././env" });

const { OPEN_AI_SECRET } = process.env;
const configuration = new Configuration({
  apiKey: OPEN_AI_SECRET,
});

const openai = new OpenAIApi(configuration);

export const getResponse = async (question) => {
  const MODEL = "gpt-3.5-turbo";

  const ROLES = {
    USER: "user",
  };

  try {
    return await new Promise(async (resolve, reject) => {
      const completation = await openai.createChatCompletion({
        model: MODEL,

        messages: [{ role: ROLES.USER, content: question }],
      });

      const ai_response = completation.data.choices[0].message.content;

      if (ai_response.data?.error) {
        reject({
          type: ai_response.data?.error.type,
          http: "none",
          message: ai_response.data?.error.message,
          isOperational: true,
        });
      }

      resolve(ai_response);
    });
  } catch (error) {
    throw new AppError(
      error.type,
      error.http,
      error.message,
      error.isOperational
    );
  }
};
