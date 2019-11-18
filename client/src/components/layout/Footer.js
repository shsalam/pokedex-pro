import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <nav className="navbar row navbar-dark bg-dark">
        <div className="container" style={{ color: "white" }}>
          <Link to={"/"}>
            <div className="navbar-brand mr-0 align-items-center">
              <span className="logo-first mr-1">POKEDEX</span>
              <span className="logo-second">PRO</span>
            </div>
          </Link>
          Created by sheef using pokeapi.co
        </div>
      </nav>
    </div>
  );
}

export default Footer;
