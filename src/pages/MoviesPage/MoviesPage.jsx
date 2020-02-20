import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Searchbar from "../../components/Searchbar/Searchbar";
import * as api from "../../Services/Api";
import FilmsList from "../../components/FilmsList/FilmsList";

const queryString = require("query-string");

class Movie extends Component {
  state = {
    shows: []
  };

  static propTypes = {
    history: PropTypes.shape({
      search: PropTypes.string,
      push: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired
    }).isRequired,
    match: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      const searchParams = queryString.parse(location.search).search;
      this.search(searchParams);
    }
  }

  search = query => {
    api
      .searchFimByQuery(query)

      .then(res => this.setState({ shows: res.data.results }));
    const { history } = this.props;
    history.push({
      ...this.props.location,
      search: `search=${query}`
    });
  };

  render() {
    const { shows } = this.state;
    const { location } = this.props;
    return (
      <div>
        <Searchbar onSubmit={this.search} />
        <FilmsList shows={shows} location={location} />
      </div>
    );
  }
}
export default Movie;
