import { AppError, commonErrors } from "../../../utils/index.js";

const USERS = "users";

export const addUser = async (userData) => {
  try {
    const newUser = await global.db.collection(USERS).insertOne(userData);
    if (newUser.acknowledged) return true;
  } catch (error) {
    throw new AppError(
      commonErrors.DatabaseInsertError,
      "none",
      `Error inserting value, there was an error while trying to insert ${userData}, check the db connection`,
      true
    );
  }
};

export const getUserByEmail = async (email) => {
  try {
    const user = await global.db.collection(USERS).findOne({ email });
    return user ? true : false;
  } catch (error) {
    throw new AppError(
      commonErrors.DatabaseFindOneError,
      "none",
      `Errors finding value, there was an error while finding the value ${email}, check the db connection`,
      true
    );
  }
};
