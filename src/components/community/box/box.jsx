import React from "react";
import styles from "./box.module.css";
import comment from "/public/mock-imges/icons/comments.svg";
import like from "/public/mock-imges/icons/like.svg";
import dislike from "/public/mock-imges/icons/dislike.svg";
import right__arrow from "/public/mock-imges/icons/right-arrow.svg";

export const Box = ({ data }) => {
  return (
    <>
      <div className={styles.boxs}>
        {data.map((item, index) => (
          <div
            className={styles.box}
            key={index}
            style={{ backgroundImage: `url(${item.backgroundImg})` }}>
            <div className={styles.box__head}>
              <span>
                <img src={comment} alt="comment" />
                {item.comments}
              </span>
              <span>
                <img src={like} alt="like svg" />+{item.likes}
              </span>
              <span>
                <img src={dislike} alt="dislike svg" />
                {item.dislikes}
              </span>
            </div>
            <div className={styles.box__content}>
              <div className={styles.stars}>
                {item.stars.map((starImage, starIndex) => (
                  <img
                    key={starIndex}
                    src={starImage}
                    alt={`star-${starIndex}`}
                  />
                ))}
              </div>
              <div className={styles.box__pagination}>
                <p>{item.categories_title}</p>
                <span>
                  <img src={right__arrow} alt="arrow right" />
                </span>
                <p>{item.categories_type}</p>
                <span>
                  <img src={right__arrow} alt="arrow right" />
                </span>

                {/* {item.id === 3 && (
                  <div>
                    <br />
                  </div>
                )} */}
                <p>{item.categories_usage}</p>
              </div>

              <div className={styles.box__title}>
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
              <div className={styles.box__profile}>
                <div className={styles.box__profile__img}>
                  <img src={item.profile.img} alt="profile img" />
                </div>
                <div className={styles.box__profile__content}>
                  <p>{item.profile.name}</p>
                  <span className={`${styles[item.profile.titstampColor]}`}>
                    {item.profile.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
