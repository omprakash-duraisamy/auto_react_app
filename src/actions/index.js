import axios from "axios";

export const FETCH_ARTICLES = "fetch_articles";
export const FETCH_ARTICLE = "fetch_article";
export const CREATE_ARTICLE = "create_article";
export const DELETE_ARTICLE = "delete_article";

const ROOT_URL = "http://node11.codenvy.io:39491/api";
//const API_KEY = "?key=PAPERCLIP1234";

export function fetchArticles() {
  const request = axios.get(`${ROOT_URL}/fetchAllArticles`);
  console.log(request);

  return {
    type: FETCH_ARTICLES,
    payload: request
  };
}

export function createArticle(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/saveArticle`, values)
    .then(() => callback());

  return {
    type: CREATE_ARTICLE,
    payload: request
  };
}

export function fetchArticle(id) {
  const request = axios.get(`${ROOT_URL}/fetchArticle/${id}`);

  return {
    type: FETCH_ARTICLE,
    payload: request
  };
}

export function deleteArticle(id, callback) {
  axios
    .delete(`${ROOT_URL}/deleteArticle/${id}`)
    .then(() => callback());

  return {
    type: DELETE_ARTICLE,
    payload: id
  };
}
