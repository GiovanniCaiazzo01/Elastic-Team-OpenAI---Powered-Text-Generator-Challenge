const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL_API;
console.log(BASE_URL);
const HTTPClient = {
  get: async (url, params) => {
    const response = await fetch(`${BASE_URL}${url}/${params}`);
    if (!response.ok) {
      throw new Error("Errore nella richiesta GET");
    }
    const data = await response.json();
    return data;
  },

  post: async (url, params, body) => {
    const response = await fetch(`${BASE_URL}${url}/${params ?? ""}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Errore nella richiesta POST");
    }
    const data = await response.json();
    return data;
  },

  put: async (url, params, body) => {
    const response = await fetch(`${BASE_URL}${url}/${params}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Errore nella richiesta PUT");
    }
    const data = await response.json();
    return data;
  },

  delete: async (url, params) => {
    const response = await fetch(`${BASE_URL}${url}/${params}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Errore nella richiesta DELETE");
    }
    const data = await response.json();
    return data;
  },
};
export default HTTPClient;
