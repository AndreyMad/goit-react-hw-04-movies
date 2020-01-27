import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    value: ""
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { onSubmit } = this.props;
    onSubmit(value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input value={value} onChange={this.handleChange} type="text" />
        <button type="submit">Search</button>
      </form>
    );
  }
}
export default Searchbar;
