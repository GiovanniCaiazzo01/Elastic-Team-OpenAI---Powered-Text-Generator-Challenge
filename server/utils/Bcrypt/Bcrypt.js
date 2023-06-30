import bcrypt from "bcrypt";
import dotEnv from "dotenv";
dotEnv.config({ path: "../.env" });

const { BCRYPT_SALT_ROUND } = process.env;

export const hashBcrypt = async (userPassword) => {
  return await bcrypt.genSalt(BCRYPT_SALT_ROUND, async (err, hash) => {
    return await hash;
  });
};
