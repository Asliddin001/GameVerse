import React from "react";
import styles from "./connecting.module.css";
import LeftArrow  from "../../../../../public/mock-imges/icons/left-arrow.svg"
import RightArrow  from "../../../../../public/mock-imges/icons/right-vector.png";
import Email  from "../../../../../public/mock-imges/icons/email.png";
import Comment  from "../../../../../public/mock-imges/icons/comment.png";

export const Connecting = () => {
  return (
    <>
    <div className="container">
        <div className={styles.connecting}>
            <ul className={styles.connecting_types}>
                <li className={styles.connecting_item}>
                    <div className={styles.connecting_item_logos}>
                        <button><img src={RightArrow} alt="left" /></button>
                        <img className={styles.connecting_email} src={Email} alt="Email" />
                        <button> <img src={LeftArrow} alt="right" /></button>
                    </div>
                        <p className={styles.connecting_item_question}>Есть вопросы к администраторам сайта?</p>
                        <p className={styles.connecting_item_answer}>Пиши на почту: support@gamerverse.ru</p>
                </li>


                <li className={styles.connecting_item}>
                    <div className={styles.connecting_item_logos}>
                        <button><img src={RightArrow} alt="left" /></button>
                        <img className={styles.connecting_message} src={Comment} alt="Email" />
                        <button> <img src={LeftArrow} alt="right" /></button>
                    </div>
                        <p className={styles.connecting_item_question}>Вопросы через чат</p>
                        <p className={styles.connecting_item_answer}>Мы так же отвечаем и решаем вопросы через сайт. В разделе ‘Сообщения’ найдите чат с Тех-Поддержкой.</p>
                </li>
            </ul>

            <div className={styles.connecting_question_card}>
                <h4>Остались вопросы или возникла проблема?</h4>
                <p><span>GamerVerse</span> - это место, где вы можете найти помощь 
                и поддержку в любом вопросе, связанном с играми. Наша 
                команда экспертов по играм всегда готова помочь вам найти 
                ответы на ваши вопросы, решить проблемы, связанные с игровым 
                процессом, и помочь вам насладиться игровым опытом полностью. 
                Независимо от того, нужна ли вам помощь с установкой или запуском игры, 
                решением технических проблем, подсказками по геймплею или просто общением 
                с другими игроками, вы можете быть уверены, что наш раздел "Остались вопросы 
                или возникла проблема?" даст вам всю необходимую поддержку и решит все ваши 
                игровые вопросы.</p>
            </div>
        </div>
    </div>
    </>
  );
};