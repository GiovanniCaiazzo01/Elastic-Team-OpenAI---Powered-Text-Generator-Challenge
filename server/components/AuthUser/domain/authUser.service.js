import { decryptBcrypt } from "../../../utils/Bcrypt/bcrypt.utils.js";
import { Result, objShapeValidation } from "../../../utils/index.js";
import { getUserByEmail } from "../data-access/authUser.repository.js";
export const login = async (user) => {
  const { email, password } = user;

  if (!(email && password)) return new Result(false, "metti tutti i fields");

  const userPayload = {
    email,
    password,
  };

  const TYPES = {
    email: "string",
    password: "string",
  };

  try {
    await objShapeValidation(userPayload, TYPES);
    const raw_user = await getUserByEmail(email);

    if (!raw_user) {
      return new Result(false, "Hai sbaglaito email fratm");
    }

    const isCorrectPassword = await decryptBcrypt(password, raw_user.password);
    if (!isCorrectPassword) {
      return new Result(false, "la tua email o password è sbaglaita gringo");
    }
  } catch (error) {
    return new Result(false, "qualcosa è andato male");
  }
};
