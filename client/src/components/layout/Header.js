import React, { Component } from "react";
import { Search } from "components";
import { Link } from "react-router-dom";
export default class extends Component {
  render() {
    const { pokeDB } = this.props;
    return (
      <div>
        <nav className="navbar row navbar-dark bg-dark">
          <div className="container">
            <Link to={"/"}>
              <div className="navbar-brand mr-0 align-items-center">
                <span className="logo-first mr-1">POKEDEX</span>
                <span className="logo-second">PRO</span>
              </div>
            </Link>
            <Search pokeDB={pokeDB} />
          </div>
        </nav>
      </div>
    );
  }
}
