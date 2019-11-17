import React, { Component } from "react";
import axios from "axios";
import { Card } from "components";
export default class List extends Component {
  state = {
    pokemon: [],
    result: [],
    filteredResult: [],
    filteredNumber: [],
    query: "",
    currentPage: 1,
    pokePerPage: 16
  };

  async componentDidMount() {
    const res = await axios.get(`http://localhost:5000/pokemon`);

    this.setState({
      result: res.data
    });
    console.log(this.state.result);
  }

  nextPage = offset => {
    this.setState({
      currentPage: offset
    });
  };

  handleChange = event => {
    const query = event.target.value;
    console.log(this.state.result);
    this.setState(prevState => {
      const filteredResult = prevState.result.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });
      const filteredNumber = prevState.result.filter(element => {
        return element.url
          .split("/")
          [element.url.split("/").length - 2].includes(query);
      });
      return {
        query,
        filteredResult,
        filteredNumber
      };
    });
  };

  render() {
    const { result, currentPage, pokePerPage } = this.state;

    // Logic for displaying pokemon
    const pokemon = [...result.slice(0, 150)];

    const indexOfLastPoke = currentPage * pokePerPage;
    const indexOfFirstPoke = indexOfLastPoke - pokePerPage;

    const currentPoke =
      pokemon && pokemon.slice(indexOfFirstPoke, indexOfLastPoke);
    console.log(currentPoke);
    // Logic for displaying page numbers
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
      <div className="container">
        <nav aria-label="Page navigation example">
          <ul className="pagination pg-blue mt-3">{renderPageNumbers}</ul>
        </nav>
        <div className="search mb-3">
          <div className="searchForm">
            <form>
              <input
                placeholder="Search for..."
                value={this.state.query}
                onChange={this.handleChange}
              />
            </form>
            <div className="results">
              {this.state.filteredResult &&
                this.state.query.length > 2 &&
                this.state.filteredResult.map(i => (
                  <p key={i.name}>
                    {i.name} #{i.url.split("/")[i.url.split("/").length - 2]}
                  </p>
                ))}
              {this.state.filteredNumber &&
                this.state.query.length <= 3 &&
                this.state.query.length > 0 &&
                this.state.filteredNumber.slice(0, 4).map(i => (
                  <p key={i.name}>
                    {i.name} #{i.url.split("/")[i.url.split("/").length - 2]}
                  </p>
                ))}
            </div>
          </div>
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
