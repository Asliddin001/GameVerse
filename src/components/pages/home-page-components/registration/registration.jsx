import React from "react";
import styles from "./registration.module.css";
// import { Button } from "../../../common/button/button";

export const Registration = () => {
  return (
    <>
    <div className="container">
        <div className={styles.registration}>
            <h4>Зарегистрируйся уже сейчас на нашем сайте!</h4>
            <p>Вступите в мир видеоигр с нашим удобным
                 и безопасным процессом регистрации и авторизации. 
                 Создайте свой личный профиль, получите доступ к 
                 эксклюзивному контенту, участвуйте в обсуждениях 
                 и присоединяйтесь к огромному сообществу геймеров.
                 Мы гарантируем защиту ваших данных и конфиденциальность,
                 чтобы вы могли насладиться игровым опытом без волнений.
                 Присоединитесь к нам сегодня и откройте новые 
                 возможности в виртуальном мире игр!
            </p>
            <div className={styles.btns}>
              <button>Авторизация</button>
              <button>Регистрация</button>
            </div>
        </div>
    </div>
    </>
  );
};