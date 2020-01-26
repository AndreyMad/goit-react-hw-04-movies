import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { trendigFilmRequest } from "../../Services/Api";
// eslint-disable-next-line import/no-cycle
import routes from "../../routes/routes";

class HomePage extends Component {
  state = {
    shows: []
  };

  componentDidMount() {
    trendigFilmRequest().then(response => {
      this.setState({ shows: [...response.data.results] });
      console.log(response);
    });
  }

  render() {
    const { shows } = this.state;
    return (
      <ul>
        {shows.map(item => {
          return (
            <li key={item.id}>
              <NavLink exact to={routes.HOME_PAGE.path}>
                {item.name || item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default HomePage;
