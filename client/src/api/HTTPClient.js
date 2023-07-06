import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL_API;
const PROMISE_MESSAGE =
  "Hang tight! We're working our magic to process your request. 🧙‍♂️✨";

const HTTPClient = {
  get: async (url, params) => {
    const id = toast.loading(PROMISE_MESSAGE);

    const response = await fetch(`${BASE_URL}${url}/${params}`).then(
      (response) => response.json()
    );

    response.result
      ? (response.message += " 🌟✨")
      : (response.message += " 🙀💔");

    toast.update(id, {
      render: response.message,
      type: response.result ? "success" : "error",
      isLoading: false,
      autoClose: true,
      hideProgressBar: false,
      draggable: true,
      closeOnClick: true,
      closeButton: true,
      pauseOnHover: true,
    });

    return response;
  },
  post: async (url, params, body) => {
    const id = toast.loading(PROMISE_MESSAGE);

    const response = await fetch(`${BASE_URL}${url}/${params ?? ""}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());

    response.result
      ? (response.message += " 🌟✨")
      : (response.message += " 🙀💔");

    toast.update(id, {
      render: response.message,
      type: response.result ? "success" : "error",
      isLoading: false,
      autoClose: true,
      hideProgressBar: false,
      draggable: true,
      closeOnClick: true,
      closeButton: true,
      pauseOnHover: true,
    });

    return response;
  },

  put: async (url, params, body) => {
    const id = toast.loading(PROMISE_MESSAGE);

    const response = await fetch(`${BASE_URL}${url}/${params}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());

    response.result
      ? (response.message += " 🌟✨")
      : (response.message += " 🙀💔");

    toast.update(id, {
      render: response.message,
      type: response.result ? "success" : "error",
      isLoading: false,
      autoClose: true,
      hideProgressBar: false,
      draggable: true,
      closeOnClick: true,
      closeButton: true,
      pauseOnHover: true,
    });

    return response;
  },

  delete: async (url, params) => {
    const id = toast.loading(PROMISE_MESSAGE);

    const response = await fetch(`${BASE_URL}${url}/${params}`, {
      method: "DELETE",
    }).then((response) => response.json());

    response.result
      ? (response.message += " 🌟✨")
      : (response.message += " 🙀💔");

    toast.update(id, {
      render: response.message,
      type: response.result ? "success" : "error",
      isLoading: false,
      autoClose: true,
      hideProgressBar: false,
      draggable: true,
      closeOnClick: true,
      closeButton: true,
      pauseOnHover: true,
    });

    return response;
  },
  verifyToken: async (token) => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const response = await fetch(`${BASE_URL}auth/verify-token`, {
      method: "GET",
      headers,
    }).then((response) => response.json());

    return response;
  },
  iaQuestion: async (url, params, body) => {
    const response = await fetch(`${BASE_URL}${url}/${params ?? ""}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());

    response.result
      ? (response.message += " 🌟✨")
      : (response.message += " 🙀💔");

    !response.result && toast.error(response.message);

    return response;
  },
};

export default HTTPClient;
