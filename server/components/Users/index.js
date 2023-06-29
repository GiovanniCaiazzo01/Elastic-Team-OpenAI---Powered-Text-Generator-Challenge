export async function register({ email, name, password }) {
  if (!(email, name, password)) {
    return { result: false, message: "perfavore metti tutti i field" };
  }

  return { result: true };
}
