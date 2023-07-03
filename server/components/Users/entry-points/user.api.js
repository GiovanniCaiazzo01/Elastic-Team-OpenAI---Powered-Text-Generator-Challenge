import { Router } from "express";
import { register } from "../domain/user.service.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { email, fullName, password } = req.body;

  const payload = {
    email,
    fullName,
    password,
  };
  const result = await register(payload);
  return res.send(result);
});

export { router as userApi };
