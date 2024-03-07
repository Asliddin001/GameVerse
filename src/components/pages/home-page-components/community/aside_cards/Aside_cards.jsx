import React from "react";
import styles from "./Aside.cards.module.css";
import { Info_cards } from "../community_info_cards/Info_cards";
import edit from "/mock-imges/icons/edit.svg";
import accept from "/mock-imges/icons/accept.svg";
import blueStar from "/mock-imges/icons/blue-stars.svg";
import fiolet from "/mock-imges/icons/fiolet-pc.svg";
import rate from "../../../../../../public/mock-imges/icons/rate.svg";

export const Aside_cards = () => {
  return (
    <div className={styles.aside_cards}>
      <div className={styles.community__item}>
        <div className={styles.community__item__card}>
          <img src={edit} />
          <h3>Создание статей удобными, интуитивно понятными инструментами</h3>
        </div>
        <div className={styles.community__item__right__mini__card}>
          <img src={accept} alt="img" loading="lazy" />
          <p>Короткий срок модерации статей</p>
        </div>
      </div>
      <Info_cards url={rate}>
        Отзывы от пользователей на статьи по 5-ти бальной системе с
        комментариями
      </Info_cards>
      <Info_cards url={fiolet}>
        Наш сайт обеспечивает стабильную работу и быструю загрузку игр, что
        позволяет наслаждаться игровым процессом без задержек
      </Info_cards>
      <Info_cards url={"/mock-imges/icons/blue-stars.svg"}>
        Мы постоянно обновляем нашу библиотеку игр и предлагаем эксклюзивный
        контент и акции для наших пользователей описанные в статьях
      </Info_cards>
    </div>
  );
};
