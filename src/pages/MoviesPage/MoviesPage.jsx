import React, { Component } from "react";

class Movie extends Component {
  state = {
    value: ""
  };

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    console.log(value);
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

export default Movie;
