import React, { FC, useEffect, useState } from "react";
import arrow from "../../assets/arrow.svg";
import Styles from "./PostPage.module.css";
import activeLike from "../../assets/activeLike.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import activedislike from "../../assets/activeDislike.svg";
import { useAppDispatch } from "../../utils/hoc";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPost } from "../../services/actions/posts";

const PostPage: FC = () => {
  useEffect(() => {
    dispatch(getPost(params.id));
  }, []);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const params = useParams();
  const post = useSelector((store: any) => store.posts.post);
  const location = useLocation();

  const [likenum, setLikenum] = useState<number>(0);
  const [dislikenum, setDislikenum] = useState<number>(0);
  const [likeactive, setLikeactove] = useState(location.state.likeactive);
  const [dislikeactive, setDislikeactove] = useState(
    location.state.dislikeactive
  );

  const onClick = () => {
    navigate("/");
  };
  useEffect(() => {
    setLikenum(location.state.likenum);
    setDislikenum(location.state.dislikenum);
  }, []);

  const onLikeClick = () => {
    setLikeactove(!likeactive);
    if (dislikeactive) {
      setDislikeactove(!dislikeactive);
      setDislikenum(dislikenum - 1);
    }
    if (likeactive) {
      setLikenum(likenum - 1);
    } else {
      setLikenum(likenum + 1);
    }
  };
  const onDislikeClick = () => {
    setDislikeactove(!dislikeactive);
    if (likeactive) {
      setLikeactove(!likeactive);
      setLikenum(likenum - 1);
    }
    if (dislikeactive) {
      setDislikenum(dislikenum - 1);
    } else {
      setDislikenum(dislikenum + 1);
    }
  };

  return (
    <section className={Styles.main}>
      <div className={Styles.header}>
        <button onClick={onClick} className={Styles.btn}>
          <img src={arrow} alt="img" />
          <div className={Styles.btnText}>Вернуться к Статьям</div>
        </button>
        <div className={Styles.scoreContainer}>
          <div className={Styles.likeContainer}>
            <button onClick={onLikeClick} className={Styles.likeBtn}>
              {likeactive ? (
                <img src={activeLike} alt="img" />
              ) : (
                <img src={like} alt="img" />
              )}
            </button>
            <div className={Styles.count}>{likenum}</div>
          </div>
          <div className={Styles.dislikeContainer}>
            <button onClick={onDislikeClick} className={Styles.likeBtn}>
              {dislikeactive ? (
                <img
                  className={Styles.dislikeImg}
                  src={activedislike}
                  alt="img"
                />
              ) : (
                <img className={Styles.dislikeImg} src={dislike} alt="img" />
              )}
            </button>

            <div className={Styles.count}>{dislikenum}</div>
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
