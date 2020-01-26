import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={style.list}>
      <li className={style.list_item}>
        <NavLink
          exact
          activeStyle={{ color: "red" }}
          to={routes.HOME_PAGE.path}
        >
          Home
        </NavLink>
      </li>
      <li className={style.list_item}>
        <NavLink activeStyle={{ color: "red" }} to={routes.MOVIE_PAGE.path}>
          Movie
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
