import * as actionTypes from "./actionTypes";
import { IArticle, ArticleAction, DispatchType } from "../type";

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  };

  return (dispatch: DispatchType) => dispatch(action);
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  };
  return (dispatch: DispatchType) => dispatch(action);
}
