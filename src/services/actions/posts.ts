import axios from "axios";
import { useAppDispatch } from "../../utils/hoc";
/* import { useAppDispatch } from "../../utils/hoc"; */

export const GET_POSTS = "GET_POSTS";
export const GET_POST = "GET_POST";
export const SET_SEARCH = "SET_SEARCH";

export const getPosts = () => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}posts`);
    dispatch({
      type: GET_POSTS,
      response,
    });
  };
};

export const getPost = (id: string | undefined) => {
  return async (dispatch = useAppDispatch()) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}posts/${id}`
    );
    dispatch({
      type: GET_POST,
      response,
    });
  };
};

export const setSearch = (item: {}) => {
  return {
    type: SET_SEARCH,
    item,
  };
};
