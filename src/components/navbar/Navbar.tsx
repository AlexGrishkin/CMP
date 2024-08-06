import { FC } from "react";
import "./Navbar.scss";
import NavSquare from "./img/NavSquare.svg";
import NavArrow from "./img/NavArrow.svg";

export const Navbar: FC = () => {
  return (
    <>
      <nav className="nav_container">
        <button>
          <NavSquare />
        </button>
        <button>
          <NavArrow />
        </button>
        <a href="#" className="nav_link">
          Просмотр
        </a>
        <a href="#">Управление</a>
      </nav>
    </>
  );
};
