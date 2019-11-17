import React, { Component } from "react";
import logo from "../../assets/img/pokeball.svg";
export default class extends Component {
  render() {
    return (
      <div>
        <nav className="navbar row navbar-dark bg-dark">
          <div className="col">
            <div className="container">
              <a>
                <div className="navbar-brand mr-0 align-items-center">
                  <span className="logo-first mr-1">POKEDEX </span>
                  <span>
                    <img
                      className="logo-middle mr-1"
                      align="middle"
                      src={logo}
                      alt="logo"
                    />
                  </span>
                  <span className="logo-second"> PRO</span>
                </div>
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
