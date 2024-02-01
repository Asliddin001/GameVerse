import React from "react";
import styles from "./cards.module.css";
import phoneIcon from "../../../../public/mock-imges/icons/phone.svg";
import pcIcon from "../../../../public/mock-imges/icons/pc.svg";
import card1Image from "../../../../public/mock-imges/img/card-1.png";
import card2Image from "../../../../public/mock-imges/img/card-2.png";
import card3Image from "../../../../public/mock-imges/img/card-3.png";
import card4Image from "../../../../public/mock-imges/img/card-4.png";
import streamIcon from "../../../../public/mock-imges/icons/stream-on.svg";

export const Cards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.cards__img}>
          <img src={phoneIcon} alt="Game Icon" />
          <img src={card1Image} alt="Game Image" />
        </div>
        <div className={styles.cards__content}>
          <p>Minecraft: Bedrock Edition</p>
          <span>
            <img src={streamIcon} alt="Stream On" />
            1535 Онлайна Онлайна
          </span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cards__img}>
          <img src={pcIcon} alt="Game Icon" />
          <img src={card2Image} alt="Game Image" />
        </div>
        <div className={styles.cards__content}>
          <p>Minecraft: Java Edition</p>
          <span>
            <img src={streamIcon} alt="Stream On" />
            435 Онлайна Онлайна
          </span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cards__img}>
          <img src={pcIcon} alt="Game Icon" />
          <img src={card3Image} alt="Game Image" />
        </div>
        <div className={styles.cards__content}>
          <p>Counter-Strike 2</p>
          <span>
            <img src={streamIcon} alt="Stream On" />
            121 Онлайна Онлайна
          </span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cards__img}>
          <img src={pcIcon} alt="Game Icon" />
          <img src={card4Image} alt="Game Image" />
        </div>
        <div className={styles.cards__content}>
          <p>Grand Theft Auto VI</p>
          <span>
            <img src={streamIcon} alt="Stream On" />
            2675 Онлайна
          </span>
        </div>
      </div>
    </div>
  );
};
