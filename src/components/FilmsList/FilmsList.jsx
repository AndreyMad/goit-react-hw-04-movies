import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React, { Component } from "react";
import style from "./FilmsList.module.css";

class FilmsList extends Component {
  state = {
    propert: { ...this.props }
  };

  componentDidMount() {
    console.log(this.state.propert);
  }
  // static propTypes = {
  //   shows: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       id: PropTypes.string.isRequired,
  //       title: PropTypes.string,
  //       poster_path: PropTypes.string.isRequired,
  //       name: PropTypes.string
  //     }).isRequired
  //   ).isRequired
  // };

  render() {
    const { shows } = this.props;
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
  }
}

export default FilmsList;
