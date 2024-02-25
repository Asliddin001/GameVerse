import star from "/mock-imges/icons/star.svg";
import white_stars from "/mock-imges/icons/white-star.svg";
import profileImg1 from "/mock-imges/img/box-profile-img-1.png";
import profileImg2 from "/mock-imges/img/box-profile-img-2.png";
import profileImg3 from "/mock-imges/img/box-profile-img-3.png";

const dataArray = [
  {
    id: 1,
    backgroundImg: "/mock-imges/img/box-1-bg.png",
    comments: 37,
    likes: 15,
    dislikes: -2,
    stars: [star, star, star, star, white_stars],
    categories: ["Minecraft", "Статьи", "Размышления"],
    categories_title: "Minecraft",
    categories_type: "Статьи",
    categories_usage: "Размышления",
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
    id: 2,
    backgroundImg: "/mock-imges/img/box-2-bg.png",
    comments: 182,
    likes: 75,
    dislikes: -4,
    stars: [star, star, star, star, star],
    categories_title: "Counter Strike 2",
    categories_type: "Статьи",
    categories_usage: "Лайфхаки",
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
    id: 3,
    backgroundImg: "/mock-imges/img/box-3-bg.png",
    comments: 182,
    likes: 75,
    dislikes: -4,
    stars: [star, star, white_stars, white_stars, white_stars],
    categories_title: "Grand Theft Auto 6",
    categories_type: "Статьи",
    categories_usage: "Размышления",
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
      "Здесь вы найдете последние публикации на самые разнообразные темы. У вас есть возможность отреагировать на статьи, помочь авторам попасть в топ публикаций, высказать свое мнение в комментариях и оценить статьи с помощью звездочек рейтинга. Присоединяйтесь к обсуждению и делитесь своими мыслями, чтобы создать динамичное и интересное сообщество любителей чтения и обсуждения статей!",
  },
];

export { dataArray, communityData };
