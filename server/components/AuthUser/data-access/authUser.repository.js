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
