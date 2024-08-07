import { FC } from "react";

import NavSquare from "./img/NavSquare.svg";
import NavArrow from "./img/NavArrow.svg";
import styles from "./Navbar.module.scss";
import Arrow from "../sidebar/Arrow.svg";

export const Navbar: FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav_container}>
        <button>
          <NavSquare />
        </button>
        <button>
          <NavArrow />
        </button>
        <a href="#" className={styles.nav_link}>
          Просмотр
        </a>
        <a href="#">Управление</a>
      </nav>
      <div className={styles.menu_container}>
        <div className={styles.sidebar__header}>
          <div className={styles.sidebar__header__title}>
            <h2>Название проекта</h2>
            <p className={styles.sidebar__header__subtitle}>Аббревиатура</p>
          </div>
          <Arrow />
        </div>
        <h1 className={styles.menu_container__title}>
          Строительно-монтажные работы
        </h1>
      </div>
    </div>
  );
};
