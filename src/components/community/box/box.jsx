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
                {item.categories.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <p>{category}</p>
                    {categoryIndex < item.categories.length - 1 && (
                      <img
                        src={right__arrow}
                        alt={`arrow-right-${categoryIndex}`}
                      />
                    )}
                  </React.Fragment>
                ))}
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
