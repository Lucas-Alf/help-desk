import { httpGet } from "../http-client";

const getList = async (text) => {
  return await httpGet("/article", { text });
};

const getById = async (id) => {
  return await httpGet(`/article?id=${id}`);
};

export { getList, getById };
