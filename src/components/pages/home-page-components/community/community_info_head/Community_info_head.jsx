import React from "react";
import styles from "./Community_info_head.module.css";
export const Community_info_head = () => {
  return (
    <div className={styles.community__info__head}>
      <h2>Наши плюсы:</h2>
      <p>
        У нас имеется большое количество преимуществ по сравнению с другими
        сайтами, но и помимо этого главные наши преимущества - это честность,
        хорошее отношение к пользователям и большое количество обновлений сайта.
      </p>
    </div>
  );
};
