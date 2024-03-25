import React, { FC, useEffect } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import { useAppDispatch } from "../../utils/hoc";
import { getPosts } from "../../services/actions/posts";
import { useSelector } from "react-redux";
import MainPost from "../../components/MainPost/MainPost";
import Post from "../../components/Post/Post";
import { v4 as uuidv4 } from "uuid";

const BlogPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const posts = useSelector((store: any) => store.posts.posts);
  console.log(posts);
  return (
    <div>
      <Header />
      <Search />
      {posts.map((post: any) => {
        return (
          <MainPost
            key={uuidv4()}
            id={post.id}
            title={post.title}
            subtitle={post.body}
          />
        );
      })}

      <Post />
    </div>
  );
};

export default BlogPage;
