import React, { Component } from "react";
import { Header, List, Footer } from "components";
import axios from "axios";
export default class Dashboard extends Component {
  state = {
    pokemon: [],
    result: [],
    filteredResult: [],
    filteredNumber: [],
    query: ""
  };

  async componentDidMount() {
    const res = await axios.get(`http://localhost:5000/pokemon`);
    this.setState({
      result: res.data
    });
    console.log(this.state.result);
  }
  render() {
    return (
      <>
        <Header pokeDB={this.state.result} />
        <List pokeDB={this.state.result} />
        <Footer />
      </>
    );
  }
}
