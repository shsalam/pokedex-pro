import React, { Component } from "react";
import { Header, List, Footer } from "components";
import axios from "axios";
export default class Dashboard extends Component {
  state = {
    pokemon: [],
    result: []
  };

  async componentDidMount() {
    const res = await axios.get(`http://localhost:5000/pokemon`);
    this.setState({
      result: res.data
    });
  }
  render() {
    return (
      <>
        <div class="main-content">
          <Header pokeDB={this.state.result} />
          <List pokeDB={this.state.result} />
        </div>
        <Footer />
      </>
    );
  }
}
