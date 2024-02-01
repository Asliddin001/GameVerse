import React from "react";
import styles from "./community.module.css";
import star from "/public/mock-imges/icons/star.svg";
import white_stars from "/public/mock-imges/icons/white-star.svg";
import profileImg1 from "/public/mock-imges/img/box-profile-img-1.png";
import profileImg2 from "/public/mock-imges/img/box-profile-img-2.png";
import profileImg3 from "/public/mock-imges/img/box-profile-img-3.png";
import { Box } from "./box/box";
// import { Comunity_card } from "./comunity_card/comunity_card";

const dataArray = [
  {
    backgroundImg: "/public/mock-imges/img/box-1-bg.png",
    comments: 37,
    likes: 15,
    dislikes: -2,
    stars: [star, star, star, star, white_stars],
    categories: ["Minecraft", "Статьи", "Размышления"],
    title: "Почему майнкрафт такой квадратный?",
    content:
      "Мне всегда казалось, что ничего интересного в квадратах нет, пока я не осознал главную мысль, которую автор хотел передать. Самое интере...",
    profile: {
      img: profileImg1,
      name: "Никита Ламехов",
      timestamp: "11:06, 26 Января, 2024",
      titstampColor: "green",
    },
  },
  {
    backgroundImg: "/public/mock-imges/img/box-2-bg.png",
    comments: 182,
    likes: 75,
    dislikes: -4,
    stars: [star, star, star, star, star],
    categories: ["Counter Strike 2", "Статьи", "Лайфхаки"],
    title: "Как стрелять и попадать с любого оружия?",
    content:
      "Достаточно много времени мне пришлось наиграть, чтобы понять несколько интересных моментов и наконец познать мощь оружия в эт...",
    profile: {
      img: profileImg2,
      name: "Иван Интересный",
      timestamp: "19:39, 29 Января, 2024",
      titstampColor: "blue",
    },
  },
  {
    backgroundImg: "/public/mock-imges/img/box-3-bg.png",
    comments: 182,
    likes: 75,
    dislikes: -4,
    stars: [star, star, white_stars, white_stars, white_stars],
    categories: ["Grand Theft Auto 6", "Статьи", "Размышления"],
    title: "Когда все таки выйдет и в правду GTA6?",
    content:
      "Очень громкая игра, которую ждут уже большинство геймеров по всему миру. Скоро нам представят уже Beta-Версию данного шедевра, в котор...",
    profile: {
      img: profileImg3,
      name: "Никола Тесла",
      timestamp: "13:56, 28 Января, 2024",
      titstampColor: "red",
    },
  },
];
const communityData = [
  {
    title: "Сообщество и статьи про игры",
    articleCount: 1243,
    content:
      "Здесь вы найдете последние публикации на самые разнообразные темы...",
  },
];

export const Community = () => {
  return (
    <>
      <div className="container">
        <div className={styles.community}>
          <div className={styles.community__boxs}>
            <Box data={dataArray} />
          </div>
          <div className={styles.community__content}>
            {/* {communityData.map((item, index) => (
              <Comunity_card
                key={index}
                title={item.title}
                articleCount={item.articleCount}
                content={item.content}
              />
            ))} */}
            <div className={styles.community__info}></div>
          </div>
        </div>
      </div>
    </>
  );
};
