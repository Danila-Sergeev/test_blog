import React, { FC, useEffect, useState } from "react";
import Styles from "./MainPost.module.css";
import activeLike from "../../assets/activeLike.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";
import activedislike from "../../assets/activeDislike.svg";
import { useNavigate } from "react-router-dom";

interface IPost {
  title: string;
  subtitle: string;
  id: number;
}

const MainPost: FC<IPost> = (props) => {
  const [likenum, setLikenum] = useState<number>(0);
  const [dislikenum, setDislikenum] = useState<number>(0);
  const [likeactive, setLikeactove] = useState(false);
  const [dislikeactive, setDislikeactove] = useState(false);

  const { id, title, subtitle } = props;
  const navigate = useNavigate();
  const someEventHandler = () => {
    navigate(`/${id}`, {
      state: { likenum, dislikenum, likeactive, dislikeactive },
    });
  };
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    setLikenum(getRandomInt(50));
    setDislikenum(getRandomInt(50));
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
    <div className={id === 1 ? Styles.main : Styles.mainMin}>
      {id === 1 ? (
        <img
          className={Styles.mainImg}
          src="https://placehold.co/1070x600"
          alt="img"
        />
      ) : (
        <img
          className={Styles.mainImg}
          src="https://placehold.co/515x273"
          alt="img"
        />
      )}
      <div className={Styles.textContainer}>
        <div className={Styles.titleContainer}>
          <h2 className={id === 1 ? Styles.title : Styles.titlemini}>
            {title}
          </h2>
          {id === 1 ? (
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
                    <img
                      className={Styles.dislikeImg}
                      src={dislike}
                      alt="img"
                    />
                  )}
                </button>

                <div className={Styles.count}>{dislikenum}</div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
        {id === 1 ? (
          <div className={Styles.subtitle}>{subtitle}</div>
        ) : (
          <div className={Styles.btnContainerMin}>
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
                    <img
                      className={Styles.dislikeImg}
                      src={dislike}
                      alt="img"
                    />
                  )}
                </button>

                <div className={Styles.count}>{dislikenum}</div>
              </div>
            </div>
            <button onClick={someEventHandler} className={Styles.btnmin}>
              Читать Далее
            </button>
          </div>
        )}
      </div>
      {id === 1 ? (
        <button onClick={someEventHandler} className={Styles.btn}>
          Читать Далее
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MainPost;
