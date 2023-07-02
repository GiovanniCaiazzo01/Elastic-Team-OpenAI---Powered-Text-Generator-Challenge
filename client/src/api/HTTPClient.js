const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL_API;
const HTTPClient = {
  get: async (url, params) => {
    const response = await fetch(`${BASE_URL}${url}/${params}`).then(
      (response) => response.json()
    );
    // if (!response.ok) {
    //   throw new Error("Errore nella richiesta GET");
    // }
    return response;
  },

  post: async (url, params, body) => {
    const response = await fetch(`${BASE_URL}${url}/${params ?? ""}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
    //  if (!response.ok) {
    //    throw new Error("Errore nella richiesta POST");
    //  }

    return response;
  },

  put: async (url, params, body) => {
    const response = await fetch(`${BASE_URL}${url}/${params}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
    // if (!response.ok) {
    //   throw new Error("Errore nella richiesta PUT");
    // }
    return response;
  },

  delete: async (url, params) => {
    const response = await fetch(`${BASE_URL}${url}/${params}`, {
      method: "DELETE",
    }).then((response) => response.json());
    // if (!response.ok) {
    //   throw new Error("Errore nella richiesta DELETE");
    // }

    return response;
  },
};
export default HTTPClient;
