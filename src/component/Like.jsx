import React, { useState } from "react";
import svg1 from "./../assets/like.svg";
import svg2 from "./../assets/comment.svg";
import svg3 from "./../assets/arrow.svg";
import classes from "./Like.module.css";
const Like = (props) => {
  const [likes, setLikes] = useState(0);
  const changeSetLikes = () => {
    setLikes(likes + 1);
  };
  const [details, setDetails] = useState(false);
  function openContent() {
    setDetails(!details);
  }

  const [comments, setComments] = useState(0);
  return (
    <div>
      <div className={classes.description}>
        <p>
          {details
            ? props.description
            : props.description.slice(0, 100) + "..."}
        </p>
      </div>
      <div className={classes.footer}>
        <div className={classes.likes}>
          <button>
            <div className={classes.likesContainer}>
              <img src={svg1} onClick={changeSetLikes}></img>
              <span>{likes}</span>
            </div>
          </button>
        </div>
        <div className={classes.comments}>
          <button>
            <div className={classes.commentsContainer}>
              <img src={svg2}></img>
              <span>{comments}</span>
            </div>
          </button>
        </div>

        <div className={classes.btn}>
          <button onClick={openContent}>
            <div className={classes.btnContainer}>
              <span>Подробнее</span>
              <img src={svg3}></img>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Like;
