import React, { Component } from "react";
export default class Search extends Component {
  state = {
    filter: ""
  };
  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <div>
        <label htmlFor="filter">Search by Pokemon: </label>
        <input
          type="text"
          id="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
