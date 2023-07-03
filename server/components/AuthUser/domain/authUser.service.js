import { decryptBcrypt } from "../../../utils/Bcrypt/bcrypt.utils.js";
import { Result } from "../../../utils/index.js";
import { registerShape } from "../../Users/domain/shapeValidation/shapeValidation.js";
import { getUserByEmail } from "../data-access/authUser.repository.js";
export const login = async (user) => {
  const { email, password } = user;

  if (!(email && password)) return new Result(false, "metti tutti i fields");

  //   email = email.trim();
  //   password = password.trim();

  const userPayload = {
    email,
    password,
  };

  const types = {
    email: "string",
    password: "string",
  };

  try {
    await registerShape(userPayload, types);
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
