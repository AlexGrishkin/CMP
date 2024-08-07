import { FC } from "react";
import Arrow from "./Arrow.svg";
import styles from "./Sidebar.module.scss";
import { titlesList } from "./mockData";
import { ListItem } from "./listItem/ListItem";

export const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar_container}>
      {/* <div className={styles.sidebar__header}>
        <div className={styles.sidebar__header__title}>
          <h2>Название проекта</h2>
          <p className={styles.sidebar__header__subtitle}>Аббревиатура</p>
        </div>
        <Arrow />
      </div> */}

      <ul className={styles.list_container}>
        {titlesList.map((item, index) => {
          return <ListItem key={index + 1} title={item.title}></ListItem>;
        })}
      </ul>
    </div>
  );
};
