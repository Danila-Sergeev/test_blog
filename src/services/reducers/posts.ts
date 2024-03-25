import { GET_POST, GET_POSTS } from "../actions/posts";

interface IGetCards {}

export type ICardsActions = IGetCards;

type TinitialState = {
  posts: [];
  post: {};
};

const initialState: TinitialState = {
  posts: [],
  post: {},
};

export const postsReducer = (state = initialState, action: any) => {
  console.log(action);
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

    default: {
      return state;
    }
  }
};
