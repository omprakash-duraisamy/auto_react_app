import axios from "axios";

export const FETCH_ARTICLES = "fetch_articles";
export const FETCH_ARTICLE = "fetch_article";
export const CREATE_ARTICLE = "create_article";
export const DELETE_ARTICLE = "delete_article";
export const IS_LOADING_SHOW = "is_loading_show";

const ROOT_URL = "http://35.200.157.105:1234/api";
//const API_KEY = "?key=PAPERCLIP1234";

export function fetchArticles(page_number) {
  const request = axios.get(`${ROOT_URL}/fetchAllArticles/${page_number}`);
  return {
    type: FETCH_ARTICLES,
    payload: request
  };
}

export const isLoadingShowAction = (isLoading) => {
  return {
    type: IS_LOADING_SHOW,
    payload: isLoading
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
