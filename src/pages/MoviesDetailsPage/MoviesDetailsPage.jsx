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
    show: {}
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
            src={`https://image.tmdb.org/t/p/w400${show.poster_path}`}
            className={style.showImage}
            alt="film prewiev "
          />
        </div>
      </>
    );
  }
}

export default MoviesDetailsPage;
