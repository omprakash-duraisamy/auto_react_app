import _ from "lodash";
import { FETCH_ARTICLES, FETCH_ARTICLE, DELETE_ARTICLE } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_ARTICLE:
      return _.omit(state, action.payload);
    case FETCH_ARTICLE:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_ARTICLES:
      return _.mapKeys(action.payload.data, "articleID");
    default:
      return state;
  }
}
