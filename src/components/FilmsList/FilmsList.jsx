import React from "react";
import { Link } from "react-router-dom";

const FilmsList = ({ shows, location }) => {
  return (
    <ul>
      {shows.map(el => (
        <li key={el.id}>
          <Link
            to={{
              pathname: `/movie/${el.id}`,
              state: { from: { ...location } },
              search: `show=${el.title}`
            }}
          >
            {el.name || el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FilmsList;
