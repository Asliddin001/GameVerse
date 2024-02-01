import React from "react";
import styles from "./onlineServers.module.css";
import stats from "../../../public/mock-imges/icons/stats.svg";
import { Cards } from "./cards/cards";

export const OnlineServers = () => {
  return (
    <div className="container">
      <div className={styles.servers}>
        <div className={styles.onlineServers}>
          <div className={styles.onlineServers__head}>
            <h1>Онлайн Сервера для игры</h1>
            <div className={styles.onlineServers__info}>
              <img src={stats} alt="" />
              <p>
                Серверов одобрено:<span>1432</span>, Отклонено:
                <span>13294</span>
              </p>
            </div>
          </div>
          <div className={styles.onlineServers__contents}>
            <div className={styles.onlineServers__content}>
              <span>#1</span>
              <p>
                У нас вы найдете все необходимые инструменты для того, чтобы
                быть в курсе текущего состояния серверов ваших любимых игр. Мы
                предлагаем{" "}
                <span className={styles.inline__1}>полный и подробный</span>{" "}
                обзор онлайна каждого сервера, чтобы вы могли легко выбрать
                подходящий и зайти в игру без задержек{" "}
              </p>
            </div>
            <div className={styles.onlineServers__content}>
              <span>#2</span>
              <p>
                Наша команда неустанно
                <span className={styles.inline__2}>проверяет и обновляет</span>
                информацию о серверах, чтобы вы могли быть уверены в ее
                актуальности. Мы убеждаемся, что каждый сервер регулярно
                проходит проверку доступности и обновления, и только после этого
                отображает его статус и текущий онлайн. Таким образом, вы можете
                быть уверены, что наш мониторинг предоставляет вам самую точную
                информацию
              </p>
              <div className={styles.rectengle}></div>
            </div>
            <div className={styles.onlineServers__content}>
              <span>#3</span>
              <p>
                Кроме того, мы проводим голосования, чтобы помочь вам найти
                лучшие серверы. Наше сообщество активно участвует в опросах,
                чтобы определить самые{" "}
                <span className={styles.inline__3}>популярные</span> серверы и
                поделиться своими мнениями. Вы можете принять участие в
                голосованиях и оставить свой отзыв, чтобы помочь другим игрокам
                сделать правильный выбор.
              </p>
            </div>
            <div className={styles.onlineServers__content}>
              <span>#4</span>
              <p>
                Так что, добро пожаловать на раздел мониторинга серверов на{" "}
                <b>GamerVerse</b> Оставайтесь в курсе актуальной информации,
                выбирайте лучшие серверы и{" "}
                <span className={styles.inline__4}>наслаждайтесь</span> игрой
                вместе с нами!
              </p>
              <div className={styles.rectengle}></div>
            </div>
          </div>
        </div>
        <div className={styles.onlineServers__cards}>
          <Cards />
        </div>
      </div>
    </div>
  );
};
