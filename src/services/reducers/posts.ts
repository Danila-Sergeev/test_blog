import { GET_POST, GET_POSTS, SET_SEARCH } from "../actions/posts";
import { IPostsResponse, IPostsData } from "../constants";

interface IGetPosts {
  readonly type: typeof GET_POSTS;
  data: IPostsData;
  response: IPostsResponse;
}
interface IGetPost {
  readonly type: typeof GET_POST;
  data: IPostsData;
  response: IPostsResponse;
}
interface IGetSearch {
  readonly type: typeof SET_SEARCH;
  item: IPostsData;
}

export type ICardsActions = IGetPosts | IGetPost | IGetSearch;

type TinitialState = {
  posts: [];
  post: {};
};

const initialState: TinitialState = {
  posts: [],
  post: {},
};

export const postsReducer = (state = initialState, action: ICardsActions) => {
  switch (action.type) {
    case GET_POSTS: {
      return {
        ...state,
        posts: action.response.data,
      };
    }
    case GET_POST: {
      return {
        ...state,
        post: action.response.data,
      };
    }
    case SET_SEARCH: {
      return {
        ...state,
        posts: [action.item],
      };
    }
    default: {
      return state;
    }
  }
};
