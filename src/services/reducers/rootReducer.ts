import { store } from "../store";
import { combineReducers } from "redux";

import { postsReducer } from "./posts";
export const rootReducer = combineReducers({
  posts: postsReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
