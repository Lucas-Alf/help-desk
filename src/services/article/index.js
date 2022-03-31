import { httpGet } from "../http-client";

const getArticle = async (text) => {
  return await httpGet("/article", { text });
};

export { getArticle };
