import { Router } from "express";
import { register } from "../domain/user.service.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { email, name, password } = req.body;

  const result = await register({ email, name, password });
  return res.send(result);
});

export { router as UserApi };
