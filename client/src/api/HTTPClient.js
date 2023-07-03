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

    toast.update(id, {
      render: response.message,
      type: response.result ? "success" : "error",
      isLoading: false,
    });

    return response;
  },
  post: async (url, params, body) => {
    const id = toast.loading(PROMISE_MESSAGE);

    const response = await fetch(`${BASE_URL}${url}/${params ?? ""}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());

    toast.update(id, {
      render: response.message,
      type: response.result ? "success" : "error",
      isLoading: false,
    });

    return response;
  },

  put: async (url, params, body) => {
    const id = toast.loading(PROMISE_MESSAGE);

    const response = await fetch(`${BASE_URL}${url}/${params}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());

    toast.update(id, {
      render: response.message,
      type: response.result ? "success" : "error",
      isLoading: false,
    });

    return response;
  },

  delete: async (url, params) => {
    const id = toast.loading(PROMISE_MESSAGE);

    const response = await fetch(`${BASE_URL}${url}/${params}`, {
      method: "DELETE",
    }).then((response) => response.json());

    toast.update(id, {
      render: response.message,
      type: response.result ? "success" : "error",
      isLoading: false,
    });

    return response;
  },
};
export default HTTPClient;
