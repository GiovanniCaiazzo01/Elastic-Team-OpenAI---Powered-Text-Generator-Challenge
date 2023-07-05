import { Router } from "express";
import { login } from "../domain/authUser.service.js";
import { verifyJwt } from "../../../utils/index.js";
const router = Router();

router.get("/verify-token", async (req, res) => {
  const { authorization } = req.headers;

  if (authorization) {
    const token = authorization.split(" ")[1];
    return res.send(await verifyJwt(token));
  }
});

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
