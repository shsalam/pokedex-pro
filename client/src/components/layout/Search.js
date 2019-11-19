import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Search extends Component {
  state = {
    filteredResult: [],
    filteredNumber: [],
    query: ""
  };
  // search bar functions
  handleChange = event => {
    const query = event.target.value;
    const { pokeDB } = this.props;
    const filteredResult =
      pokeDB &&
      pokeDB.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });
    const filteredNumber =
      pokeDB &&
      pokeDB.filter(element => {
        return element.url
          .split("/")
          [element.url.split("/").length - 2].includes(query);
      });
    this.setState({
      query,
      filteredResult,
      filteredNumber
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      query: "",
      filteredResult: [],
      filteredNumber: []
    });
  };

  render() {
    return (
      <div className="search mb-3">
        <div className="searchForm">
          <form>
            <input
              placeholder="Search by name or number.."
              value={this.state.query}
              onChange={this.handleChange}
            />
          </form>
          <ul className="results">
            {this.state.filteredResult &&
              this.state.query.length > 2 &&
              this.state.filteredResult.map(i => (
                <div onClick={this.handleSubmit}>
                  <Link
                    to={`pokemon/${
                      i.url.split("/")[i.url.split("/").length - 2]
                    }`}
                  >
                    <li key={i.name}>
                      {i.name} #{i.url.split("/")[i.url.split("/").length - 2]}
                    </li>
                  </Link>
                </div>
              ))}
            {this.state.filteredNumber &&
              this.state.query.length <= 3 &&
              this.state.query.length > 0 &&
              this.state.filteredNumber.slice(0, 4).map(i => (
                <Link
                  to={`pokemon/${
                    i.url.split("/")[i.url.split("/").length - 2]
                  }`}
                >
                  <li key={i.name}>
                    {i.name} #{i.url.split("/")[i.url.split("/").length - 2]}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
