import React from "react";
import styles from "./Rigth_info_cards.module.css";
import support from "../../../../../../public/mock-imges/icons/support.svg";
import heart from "../../../../../../public/mock-imges/icons/heart.svg";

export const Rigth_info_cards = () => {
  return (
    <div className={styles.right_info_cards}>
      <div className={styles.right_info_card_item}>
       <img src={support} alt="img"/>
          <p>Поддержка выдающихся авторов</p>
      </div>
      <div className={styles.right_info_card_item}>
       <img src={heart} alt="img"/>
          <p> Сайт, созданный игроком. Мы знаем, как сделать его удобнее и лучше для вас</p>
      </div>
    </div>
  );
};
