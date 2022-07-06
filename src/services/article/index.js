import { httpGet, httpPost, httpPut } from "../http-client";

const getArticleList = async (text) => {
  return httpGet("/article", { text });
};

const getArticleListByCategory = async (categoryId) => {
  return httpGet("/article/category", { categoryId });
};

const getArticle = async (id) => {
  return httpGet(`/article/${id}`);
};

const addArticle = async (obj) => {
  return httpPost("/article", obj);
};

const updateArticle = async (obj) => {
  return httpPut("/article", obj);
};

export {
  getArticleList,
  getArticleListByCategory,
  getArticle,
  addArticle,
  updateArticle,
};
