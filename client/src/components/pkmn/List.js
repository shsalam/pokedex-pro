import React, { Component } from "react";
import axios from "axios";
import { Card, Pagination, Search } from "components";
export default class List extends Component {
  state = {
    pokemon: [],
    result: [],
    currentPage: 1,
    pokePerPage: 15
  };
  async componentDidMount() {
    const res = await axios.get(`http://localhost:5000/pokemon`);
    this.setState({
      result: res.data,
      pokemon: res.data.splice(0, 150)
    });
  }

  nextPage = offset => {
    this.setState({
      currentPage: offset
    });
  };

  render() {
    const numberPages = 10;
    const { pokemon, currentPage, pokePerPage } = this.state;

    // Logic for displaying pokemon
    const indexOfLastPoke = currentPage * pokePerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage;
    const currentPoke =
      pokemon && pokemon.slice(indexOfFirstPoke, indexOfLastPoke);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokemon.length / pokePerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li key={number} id={number} onClick={this.nextPage.bind(this, number)}>
          {number}
        </li>
      );
    });

    return (
      <div className="container">
        {renderPageNumbers}
        <div className="mb-3">
          <Search find={this.state.results} />
        </div>

        {pokemon && pokemon.length > 0 ? (
          <div className="row">
            {currentPoke.map(pokemon => (
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
