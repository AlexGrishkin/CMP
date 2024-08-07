import { FC } from "react";
import Marker from "./marker.svg";
import style from "./ListItem.module.scss";

export type ListItemProps = {
  title: string;
};

export const ListItem: FC<ListItemProps> = ({ title }) => {
  return (
    <li className={style.list_container}>
      <Marker />
      <p>{title}</p>
    </li>
  );
};
