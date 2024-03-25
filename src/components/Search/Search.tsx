import React, { ChangeEvent, FC, useState } from "react";
import Styles from "./Search.module.css";

const Search: FC = () => {
  const [serachQuery, setserachQuery] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

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
