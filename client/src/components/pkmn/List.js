import React, { Component } from "react";
import { Card } from "components";
export default class List extends Component {
  state = {
    currentPage: 1,
    pokePerPage: 16
  };

  // Function to control pagination
  nextPage = offset => {
    this.setState({
      currentPage: offset
    });
  };

  render() {
    const { currentPage, pokePerPage } = this.state;
    const { pokeDB } = this.props;

    // Logic for displaying correct pokemon
    const pokemon = [...pokeDB.slice(0, 150)];
    const indexOfLastPoke = currentPage * pokePerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage;
    const currentPoke =
      pokemon && pokemon.slice(indexOfFirstPoke, indexOfLastPoke);

    // Logic for displaying correct page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokemon.length / pokePerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          className="page-item mr-1"
          key={number}
          id={number}
          onClick={this.nextPage.bind(this, number)}
        >
          <div className="ball">
            <div className="center">
              <div className="center2"></div>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className="container view">
        <nav aria-label="Page navigation example">
          <ul className="pagination pg-blue mt-3">{renderPageNumbers}</ul>
        </nav>

        {pokemon && pokemon.length > 0 ? (
          <div className="row">
            {currentPoke.map(poke => (
              <Card key={poke.name} name={poke.name} url={poke.url} />
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}
