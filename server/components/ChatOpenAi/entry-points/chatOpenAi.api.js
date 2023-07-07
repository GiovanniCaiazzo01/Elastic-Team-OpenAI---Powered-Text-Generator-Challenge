import { Router } from "express";
import { userQuestion } from "../domain/chatOpenai.domain.js";
const router = Router();

router.post("/", async (req, res) => {
  const { question } = req.body;

  const paylaod = {
    question,
  };

  const result = await userQuestion(paylaod);
  return res.send(result);
});

export { router as chatApi };
