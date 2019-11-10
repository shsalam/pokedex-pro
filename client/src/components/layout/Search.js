import React, { Component } from "react";
import { Form } from "components";
import axios from "axios";
export default class Search extends Component {
  state = { results: null, term: "" };
  handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.get(`https://pokeapi.co/api/v2/${this.state.term}`);
    this.setState({ results: res });
    console.log(this.state.results);
  };
  handleChange = e => {
    this.setState({ term: e.target.value });
  };
  render() {
    return (
      <div>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Form>
      </div>
    );
  }
}
