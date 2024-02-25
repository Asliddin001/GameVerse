import React from "react";
import styles from "./comunity_card.module.css";
import hat from "/mock-imges/icons/hat.png";

export const ComunityCard = ({ title, articleCount, content }) => (
  <div className={styles.card}>
    <div className={styles.card__head}>
      <h4>{title}</h4>
      <p>
        <img src={hat} alt="" />
        Статей:<span>{articleCount}</span>
      </p>
    </div>
    <div className={styles.card__content}>
      <h5>#1</h5>
      <p>{content}</p>
    </div>
  </div>
);
