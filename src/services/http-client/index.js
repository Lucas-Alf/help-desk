import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000",
});

const httpGet = async (url, data, params = {}) => {
  return http.get(url, {
    params: data,
    ...params,
  });
};

export { httpGet };
