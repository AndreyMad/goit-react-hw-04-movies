import React from "react";
import style from "./Cast.module.css";
import noPhotoImage from "../../assets/img/no_photo.png";

const Cast = ({ cast }) => {
  return (
    <ul className={style.castWrapper}>
      {cast.map(el => (
        <li key={el.id}>
          <img
            alt="Actor "
            className={style.image}
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w300/${el.profile_path}`
                : noPhotoImage
            }
          />{" "}
          <span>{el.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
