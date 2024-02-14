import React from "react";
import styles from "./community.module.css";
import { Box } from "./box/box";
import { ComunityCard } from "./comunity_card/comunity_card";
import { communityData, dataArray } from "../../data/data";

export const Community = () => {
  return (
    <>
      <div className="container">
        <div className={styles.community}>
          <div className={styles.community__boxs}>
            <Box data={dataArray} />
          </div>
          <div className={styles.community__content}>
            {communityData.map((item, index) => (
              <ComunityCard
                key={index}
                title={item.title}
                articleCount={item.articleCount}
                content={item.content}
              />
            ))}
            <div className={styles.community__info}>
              <div className={styles.community__info__head}>
                <h3>Наши плюсы:</h3>
                <p>
                  У нас имеется большое количество преимуществ по сравнению с
                  другими сайтами, но и помимо этого главные наши преимущества -
                  это честность, хорошее отношение к пользователям и большое
                  количество обновлений сайта.
                </p>
              </div>
              <div className={styles.community__info__content}>
                <div className={styles.community__item}>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
