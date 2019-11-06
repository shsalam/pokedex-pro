import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
export default class List extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0%22",
    pokemon: null
  };
  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
  }
  render() {
    return (
      <div>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}
