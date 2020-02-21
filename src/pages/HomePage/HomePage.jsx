import React, { Component } from "react";

import PropTypes from "prop-types";
import { trendigFilmRequest } from "../../Services/Api";
import FilmsList from "../../components/FilmsList/FilmsList";
import style from "./HomePage.module.css";

class HomePage extends Component {
  static propTypes = {
    location: PropTypes.shape({ state: PropTypes.shape({}).isRequired })
      .isRequired,
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
  };

  state = {
    shows: []
  };

  componentDidMount() {
    trendigFilmRequest().then(response => {
      this.setState({ shows: [...response.data.results] });
    });
  }

  handleHistory = () => {
    const { location, history } = this.props;
    history.push(location.state);
  };

  render() {
    const { shows } = this.state;
    // this.handleHistory();
    return (
      <>
        <h2 className={style.title}>Trending today</h2>

        <FilmsList shows={shows} handleHistory={this.handleHistory} />
      </>
    );
  }
}

export default HomePage;
