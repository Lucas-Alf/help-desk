import axios from "axios";

const http = axios.create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "http://localhost:5000"
      : "https://help-desker-api.herokuapp.com",
});

const httpGet = async (url, data, params = {}) => {
  return http.get(url, {
    params: data,
    ...params,
  });
};

const httpPost = async (url, data) => {
  return http.post(url, data);
};

const httpPut = async (url, data) => {
  return http.put(url, data);
};

export { httpGet, httpPost, httpPut };
