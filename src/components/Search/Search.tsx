import React, { ChangeEvent, FC, useState } from "react";
import Styles from "./Search.module.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../utils/hoc";
import { getPosts, setSearch } from "../../services/actions/posts";
import { IPostsData } from "../../services/constants";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const [serachQuery, setserachQuery] = useState("");
  const posts = useSelector((store: any) => store.posts.posts);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setserachQuery(event.target.value);
    let obj = posts.find((o: IPostsData) => o.title === event.target.value);
    obj ? dispatch(setSearch(obj)) : dispatch(getPosts());
  };

  return (
    <section>
      <div className={Styles.mainBox}>
        <input
          className={Styles.input}
          type="text"
          name="search"
          placeholder="Поиск по названию статьи"
          onChange={handleChange}
          value={serachQuery}
        />
      </div>
    </section>
  );
};

export default Search;
