import React, { Component } from "react";
import PropTypes from "prop-types";
import { trendigFilmRequest } from "../../Services/Api";
import FilmsList from "../../components/FilmsList/FilmsList";
import style from "./HomePage.module.css";

class HomePage extends Component {
  static propTypes = {
    location: PropTypes.shape({}).isRequired
  };

  state = {
    shows: []
  };

  componentDidMount() {
    trendigFilmRequest().then(response => {
      this.setState({ shows: [...response.data.results] });
    });
  }

  render() {
    const { shows } = this.state;
    const { location } = this.props;
    return (
      <>
        <h2 className={style.title}>Trending today</h2>
        <FilmsList shows={shows} location={location} />
      </>
    );
  }
}

export default HomePage;
