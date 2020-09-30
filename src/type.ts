import { type } from "os";

export interface IArticle {
  readonly id: number;
  readonly title: string;
  readonly body: string;
}

export type ArticleState = {
  articles: IArticle[];
};

export type ArticleAction = {
  readonly type: string;
  readonly article: IArticle;
};

export type DispatchType = (args: ArticleAction) => ArticleAction;
