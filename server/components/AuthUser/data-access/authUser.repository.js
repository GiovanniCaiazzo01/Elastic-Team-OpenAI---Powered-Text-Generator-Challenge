import { makeJwt } from "../../../utils/Jwt/jwt.utils.js";
import { AppError, commonErrors } from "../../../utils/index.js";

const USERS = "users";

export const getUserByEmail = async (email) => {
  try {
    const user = await global.db.collection(USERS).findOne({ email });
    return user ? user : false;
  } catch (error) {
    throw new AppError(
      commonErrors.DatabaseFindOneError,
      "none",
      `Errors finding value, there was an error while finding the value ${email}, check the db connection`,
      true
    );
  }
};

export const updateUserData = async (ucode, data_to_update, isUpsert) => {
  try {
    const user = await global.db
      .collection(USERS)
      .updateOne(
        { ucode },
        { $set: { ...data_to_update } },
        isUpsert ? { upsert: true } : {}
      );
    return user ? true : false;
  } catch (error) {
    throw new AppError(
      commonErrors.DatabaseUpdateOneError,
      "none",
      `Errors update document, there was an error while updating the document for the ucode ${ucode}, check the db connection`,
      true
    );
  }
};

export const updateUserToken = async (user) => {
  try {
    const jwtToken = await makeJwt(user);
    user.jwt_token = jwtToken;
    const jwtInsert = await updateUserData(
      user.ucode,
      { jwt_token: jwtToken },
      true
    );
    return jwtInsert ? true : false;
  } catch (error) {
    console.log(error);
    throw new AppError(
      commonErrors.DatabaseUpdateOneError,
      "none",
      `Errors update document, there was an error while updating the document for the ucode ${user.ucode}, check the db connection`,
      true
    );
  }
};
