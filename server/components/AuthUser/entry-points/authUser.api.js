import { Router } from "express";
import { login } from "../domain/authUser.service.js";
const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const payload = {
    email,
    password,
  };

  const result = await login(payload);
  return res.send(result);
});

export { router as authApi };
