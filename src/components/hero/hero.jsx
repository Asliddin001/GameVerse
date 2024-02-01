import React from "react";
import styles from "./hero.module.css";
import white_logo from "../../../public/mock-imges/icons/white-logo.svg";
import mouse_bottom from "../../../public/mock-imges/icons/mouse-bottom.svg";

export const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div className="container">
        <div className={styles.hero}>
          <div className={styles.hero__logo}>
            <img src={white_logo} alt="white-logo" />
          </div>
          <p>
            GamerVerse - место, где игровая страсть сливается с знаниями и
            общением! Погрузитесь в увлекательный мир игр на нашем форуме, где
            вы можете обсудить любимые игры, делиться опытом и вступать в
            интересные дискуссии. Наши статьи охватывают различные игры,
            предлагая вам новые идеи и подсказки. Мы предлагаем также мониторинг
            онлайна на играх, чтобы вы всегда были в курсе актуальной ситуации.
            Примите участие в наших захватывающих турнирах и проверьте свои
            навыки игры, а также примите участие в наших опросах, чтобы
            высказать свое мнение. GamerVerse - ваш путь в игровое
            превосходство!
          </p>
          <button onClick={handleScroll}>
            <img src={mouse_bottom} alt="mouse bottom svg" />
          </button>
        </div>
      </div>
    </header>
  );
};
