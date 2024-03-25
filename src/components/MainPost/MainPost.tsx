import React, { FC, useEffect } from "react";
import Styles from "./MainPost.module.css";
import activeLike from "../../assets/activeLike.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import activedislike from "../../assets/activeDislike.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";

interface IPost {
  title: string;
  subtitle: string;
  id: string;
}

const MainPost: FC<IPost> = (props) => {
  const { id, title, subtitle } = props;
  const navigate = useNavigate();
  const someEventHandler = () => {
    navigate(`/${id}`);
  };
  return (
    <div className={Styles.main}>
      <img
        className={Styles.mainImg}
        src="https://placehold.co/1070x600"
        alt="img"
      />
      <div className={Styles.textContainer}>
        <div className={Styles.titleContainer}>
          <h2 className={Styles.title}>{title}</h2>
          <div className={Styles.scoreContainer}>
            <div className={Styles.likeContainer}>
              <button className={Styles.likeBtn}>
                <img src={like} alt="img" />
              </button>
              <div className={Styles.count}>150</div>
            </div>
            <div className={Styles.dislikeContainer}>
              <button className={Styles.likeBtn}>
                <img className={Styles.dislikeImg} src={dislike} alt="img" />
              </button>

              <div className={Styles.count}>10</div>
            </div>
          </div>
        </div>
        <div className={Styles.subtitle}>{subtitle}</div>
      </div>
      <button onClick={someEventHandler} className={Styles.btn}>
        Читать Далее
      </button>
    </div>
  );
};

export default MainPost;
