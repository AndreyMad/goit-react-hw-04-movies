import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../../Services/Api";
import style from "./MoviesDetailsPage.module.css";

class MoviesDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        moviId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

  state = {
    imgSrc: "",
    title: "",
    releaseDate: "",
    userScore: "",
    genres: []
  };

  componentDidMount() {
    const { match } = this.props;
    api
      .searcShowById(match.params.moviId)
      .then(res => {
        this.setState({
          imgSrc: res.data.poster_path,
          releaseDate: res.data.release_date,
          userScore: res.data.vote_average,
          genres: [...res.data.genres],
          title: res.data.title,
          overview: res.data.overview
        });
        return res;
      })

      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const {
      imgSrc,
      releaseDate,
      title,
      userScore,
      genres,
      overview
    } = this.state;

    return (
      <>
        <div className={style.container}>
          <div className={style.wrapper}>
            <img
              src={`https://image.tmdb.org/t/p/w400${imgSrc}`}
              className={style.showImage}
              alt="film prewiev "
            />
            <div className={style.innerWrapper}>
              <h2 className={style.title}>{`${title} (${releaseDate})`} </h2>
              <span className={style.text}>
                {userScore ? `User Score: ${userScore * 10}%` : null}
              </span>
              <span className={style.boldText}>Overview</span>
              <span className={style.text}>{overview}</span>
              <span className={style.boldText}>Genres</span>

              <span className={style.text}>
                {genres.map(el => `${el.name} `)}
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MoviesDetailsPage;
