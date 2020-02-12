import React, { Component } from "react";

import { trendigFilmRequest } from "../../Services/Api";
import FilmsList from "../../components/FilmsList/FilmsList";

class HomePage extends Component {
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

    return (
      <>
        <h2>Trending today</h2>

        <FilmsList shows={shows} />
      </>
    );
  }
}

export default HomePage;
