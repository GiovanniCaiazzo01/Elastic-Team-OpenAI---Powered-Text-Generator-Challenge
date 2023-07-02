class HTTPClient {
  BASE_URL = import.meta.env.REACT_APP_BASE_URL_API;
  async get(url, params) {
    const response = await fetch(
      `${this.REACT_APP_BASE_URL_API}${url}/${params}`
    );
    const data = await response.json();
    return data;
  }

  async post(url, params, body) {
    const response = await fetch(
      `${this.REACT_APP_BASE_URL_API}${url}/${params}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return data;
  }

  async put(url, params, body) {
    const response = await fetch(
      `${this.REACT_APP_BASE_URL_API}${url}/${params}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const data = await response.json();
    return data;
  }

  async delete(url, params) {
    const response = await fetch(
      `${this.REACT_APP_BASE_URL_API}${url}/${params}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  }
}

export default HTTPClient;
