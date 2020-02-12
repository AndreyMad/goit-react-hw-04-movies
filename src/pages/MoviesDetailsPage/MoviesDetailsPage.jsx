import React, { Component } from "react";
import * as api from "../../Services/Api";
import style from "./MoviesDetailsPage.module.css";

class MoviesDetailsPage extends Component {
  state = {
    show: {},
    imgSrc: ""
  };

  componentDidMount() {
    const { match } = this.props;
    api
      .searcShowById(match.params.moviId)
      .then(res => {
        this.setState({ show: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { show } = this.state;

    return (
      <>
        <div className={style.wrapper}>
          <h2 className={style.title}>
            {`${show.title} (${show.release_date})`}{" "}
          </h2>
          <img
            src={`https://image.tmdb.org/t/p/w300${show.poster_path}`}
            className={style.showImage}
            alt="film prewiev "
          />
        </div>
      </>
    );
  }
}

export default MoviesDetailsPage;
