import React, { Component } from "react";
import axios from "axios";
export default class Detail extends Component {
  state = {
    name: "",
    number: "",
    sprite: ""
  };

  async componentDidMount() {
    const { number } = this.props.match.params;
    //poke info
    // Urls for pokemon information
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${number}/`;
    const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${number}/`;

    // Get Pokemon Information
    const pokemonRes = await axios.get(pokeURL);
    const name = pokemonRes.data.name;
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
