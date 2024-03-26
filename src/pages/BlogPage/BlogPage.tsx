import React, { FC, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import { useAppDispatch } from "../../utils/hoc";
import { getPosts } from "../../services/actions/posts";
import { useSelector } from "react-redux";
import MainPost from "../../components/MainPost/MainPost";
import { v4 as uuidv4 } from "uuid";
import Styles from "./BlogPage.module.css";
import ReactPaginate from "react-paginate";
import { IPostsData } from "../../services/constants";

const BlogPage: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const posts = useSelector((store: any) => store.posts.posts);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = posts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <Header />
      <Search />
      <div className={Styles.posts}>
        {currentItems.map((post: IPostsData) => {
          return (
            <MainPost
              key={uuidv4()}
              id={post.id}
              title={post.title}
              subtitle={post.body}
            />
          );
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName={Styles.pagination}
        pageLinkClassName={Styles.page_num}
        previousLinkClassName={Styles.page_num}
        nextLinkClassName={Styles.page_num}
        activeLinkClassName={Styles.active}
      />
    </div>
  );
};

export default BlogPage;
