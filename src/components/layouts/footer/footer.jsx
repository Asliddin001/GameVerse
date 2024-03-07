import React from "react";
import styles from "./footer.module.css";
import SiteLogo  from "../../../../public/mock-imges/icons/white-logo.svg"
import Telegram  from "../../../../public/mock-imges/icons/telegram.png"
import VK  from "../../../../public/mock-imges/icons/social-vk.png"

export const Footer = () => {
    return (
      <footer className={styles.footer_background}>
      <div className="container">
       <div className={styles.footer}>
        <div className={styles.left_part_footer}>
            <a className={styles.site_link} href="#"><img className={styles.siteLogo} src={SiteLogo} alt="site logo" /></a>
            <p className={styles.site_defination}>Играй, общайся, преуспевай - на GamerVerse!</p>
        </div>
       
        <div className={styles.site_network}>
            <a className={styles.site_link} href="#"><img className={styles.telegram} src={Telegram} alt=" telegram site social media" /></a>
            <a className={styles.site_link} href="#"><img className={styles.vk} src={VK} alt="vk site social media" /></a>
        </div>
       </div>
      </div>

      <hr className={styles.footer_line} />

      <div className="container">
       <div className={styles.footer}>
       <div className={styles.left_part_footer}>
            <div className={styles.left_part_footer_links}><a href="#">Главная</a><a href="#">О нас</a><a href="#">FAQ</a><a href="#">Авторизация</a><a href="#">Регистрация</a></div>
            <div className={styles.left_part_footer_links}><a href="#">Личный кабинет</a><a href="#">Поддержать проект</a><a href="#">Статьи</a><a href="#">Сервера</a><a href="#">Обсуждения</a></div>
        </div>

       <div className={styles.right_part_footer}>
            <div className={styles.right_part_footer_links}><a href="#">Условия использования</a><a href="#">Политика конфиденциальности</a></div>
            <p className={styles.right_part_year}>© 2024 GamerVerse</p>
        </div>

       </div>
      </div>
      </footer>
    );
  };