import React, { FC } from "react";
import Styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <section className={Styles.main}>
      <div className={Styles.title}>Блог</div>
      <div className={Styles.subtitle}>
        Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а
        также переводим зарубежные статьи
      </div>
    </section>
  );
};

export default Header;
