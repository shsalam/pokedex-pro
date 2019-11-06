import React, { Component } from "react";

export default class Card extends Component {
  state = {
    name: "",
    sprite: "",
    number: ""
  };
  componentDidMount() {
    const { name, url } = this.props;
    const number = url.split("/")[url.split("/").length - 2];
    const sprite = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${number}.png?raw=true`;
    this.setState({ name, sprite, number });
  }
  render() {
    return (
      <div className="col-md-4 col-sm-6">
        <div className="card">
          <div className="card-header">{this.state.number}</div>
          <div className="card-body">
            <h6>
              <div className="card-title">{this.state.name}</div>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
