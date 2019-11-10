import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Card, Pagination, Search } from "components";
export default class List extends Component {
  state = {
    pokemon: null,
    currentOffset: 0
  };
  async componentDidMount() {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`
    );
    this.setState({
      pokemon: res.data["results"],
      totalResults: res.data.length
    });
  }
  nextPage = async offset => {
    const res2 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`
    );

    this.setState({
      pokemon: res2.data["results"]
    });

    console.log(this.state.pokemon);
  };
  render() {
    const numberPages = 10;

    return (
      <div className="container">
        <Pagination
          pages={numberPages}
          nextPage={this.nextPage}
          currentOffset={this.state.currentOffset}
        />
        <div className="mb-3">
          <Search />
        </div>

        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
        <Pagination
          pages={numberPages}
          nextPage={this.nextPage}
          currentOffset={this.state.currentOffset}
        />
      </div>
    );
  }
}
