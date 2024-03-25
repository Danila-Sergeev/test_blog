import React, { FC, useEffect } from "react";
import arrow from "../../assets/arrow.svg";
import Styles from "./PostPage.module.css";
import activeLike from "../../assets/activeLike.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import activedislike from "../../assets/activeDislike.svg";
import { useAppDispatch } from "../../utils/hoc";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPost } from "../../services/actions/posts";

const PostPage: FC = () => {
  useEffect(() => {
    dispatch(getPost(params.id));
  }, []);
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };

  const dispatch = useAppDispatch();
  const params = useParams();
  const post = useSelector((store: any) => store.posts.post);
  console.log(post);
  return (
    <section className={Styles.main}>
      <div className={Styles.header}>
        <button onClick={onClick} className={Styles.btn}>
          <img src={arrow} alt="img" />
          <div className={Styles.btnText}>Вернуться к Статьям</div>
        </button>
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
      <div className={Styles.textBox}>
        <h2 className={Styles.title}>{post.title}</h2>
        <img
          className={Styles.img}
          src="https://placehold.co/848x477"
          alt="img"
        />
        <div className={Styles.subtitle}>{post.body}</div>
      </div>
    </section>
  );
};

export default PostPage;
