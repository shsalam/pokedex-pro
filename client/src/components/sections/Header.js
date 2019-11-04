import React, { PureComponent } from "react";
import logo from "assets/img/pikachu.svg";

export class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <h1 className="logo__text">
            <span className="logo__text--red">POKEDEX</span>PRO
          </h1>
          <img className="logo__img" src={logo} alt="pikachu" />
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="search-bar__field"
            placeholder="Search for a pokemon!"
            maxlength="50"
            autocomplete="off"
          />
          <button type="button" className="search-bar__btn">
            SEARCH
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
