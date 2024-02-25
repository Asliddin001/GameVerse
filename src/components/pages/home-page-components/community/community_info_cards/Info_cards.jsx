import React from "react";
import styles from "./Info_cards.module.css";

export const Info_cards = ({ url, children, type = true }) => {
  return (
    <div className={type ? styles.info_card : styles.info_card2}>
      <img src={url} alt={url} loading="lazy" />
      <h3>{children}</h3>
    </div>
  );
};
