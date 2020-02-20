import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./FilmsList.module.css";

const FilmsList = ({ location, shows }) => {
  return (
    <ul className={style.item_Wrapper}>
      {shows.map(el => (
        <li className={style.item_innerWrapper} key={el.id}>
          <Link
            to={{
              pathname: `/movie/${el.id}`,
              state: { from: { ...location } },
              search: `show=${el.title}`
            }}
          >
            <div className={style.imageWrapper}>
              <img
                className={style.filmImage}
                alt="Film"
                src={`https://image.tmdb.org/t/p/w400${el.poster_path}`}
              />
            </div>
            <span className={style.link}> {el.name || el.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
FilmsList.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string.isRequired,
      name: PropTypes.string
    }).isRequired
  ).isRequired,
  location: PropTypes.shape({}).isRequired
};
export default FilmsList;
