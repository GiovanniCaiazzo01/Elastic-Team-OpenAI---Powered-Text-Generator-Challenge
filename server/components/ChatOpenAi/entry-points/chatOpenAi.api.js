import { Router } from "express";
import { userQuestion } from "../domain/chatOpenai.domain.js";
const router = Router();

router.post("/", async (req, res) => {
  const { chatInput } = req.body;

  const paylaod = {
    question: chatInput,
  };

  const result = await userQuestion(paylaod);
  console.log(result);
  return res.send(result);
});

export { router as chatApi };
