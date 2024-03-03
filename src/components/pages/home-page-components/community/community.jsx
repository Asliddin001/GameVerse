import React from "react";
import styles from "./community.module.css";
import { Box } from "./box/box";
import { ComunityCard } from "./comunity_card/comunity_card";
import { communityData, dataArray } from "../../../../data/data";
import { Community_info_head } from "./community_info_head/Community_info_head";
import { Aside_cards } from "./aside_cards/Aside_cards.jsx";
import { Rigth_info_cards } from "./right_info_cards/Rigth_info_cards";
import { Comunity_card_continuation } from "./comunity_card_continuation/comunity_card_continuation";
export const Community = () => {
  return (
    <>
      <div className="container">
        <div className={styles.community}>
          <div className={styles.community__boxs}>
            <Box data={dataArray} />
            <Comunity_card_continuation/>
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
              <Community_info_head />
              <div className={styles.community__info__content}>
                <Aside_cards />
                <Rigth_info_cards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
