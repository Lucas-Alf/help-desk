import { httpGet, httpPost, httpPut } from "../http-client";

const getCategoryList = async (text) => {
  return httpGet("/category", { text });
};

const getCategory = async (id) => {
  return httpGet(`/category/${id}`);
};

const addCategory = async (obj) => {
  return httpPost("/category", obj);
};

const updateCategory = async (obj) => {
  return httpPut("/category", obj);
};

export { getCategoryList, getCategory, addCategory, updateCategory };
