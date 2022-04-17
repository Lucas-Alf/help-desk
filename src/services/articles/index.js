import { httpGet, httpPost, httpPut } from "../http-client";

const getArticleList = async (text) => {
  return await httpGet("/article", { text });
};

const getArticle = async (id) => {
  return await httpGet(`/article/${id}`);
};

const addArticle = async (obj) => {
  return await httpPost("/article", obj);
};

const updateArticle = async (obj) => {
  return await httpPut("/article", obj);
};

export { getArticleList, getArticle, addArticle, updateArticle };
