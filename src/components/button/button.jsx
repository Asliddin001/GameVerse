import React from "react";
import styles from "./button.module.css";

export const Button = ({ children, type }) => {
  const buttonClassName = type
    ? `${styles.button} ${styles[type]}`
    : styles.button;

  return (
    <div>
      <button className={buttonClassName}>{children}</button>
    </div>
  );
};
