import React from "react";
import styles from "./navbar.module.css";
import logo from "/mock-imges/icons/logo.svg";
import { Button } from "../button/button";

export const Navbar = () => {
  return (
    <div className={styles.nav__bg}>
      <div className="container">
        <nav>
          <div className={styles.nav__logo}>
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#">Игры</a>
            </li>
            <li>
              <a href="#">Мониторинг</a>
            </li>
            <li>
              <a href="#">Последние статьи</a>
            </li>
            <div className={styles.btns}>
              <Button>Авторизация</Button>
              <Button type="secondary">Регистрация</Button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};
