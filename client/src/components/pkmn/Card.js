import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";
const Sprite = styles.img`
  width: 5em;
  height: 5em;
`;

export default class Card extends Component {
  state = {
    name: "",
    sprite: "",
    number: "",
    imageLoading: true,
    requests: false
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
        <Link to={`pokemon/${this.state.number}`}>
          <div className="card">
            <h5 className="card-header">{this.state.number}</h5>
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ requests: true })}
              src={this.state.sprite}
            ></Sprite>

            <div className="card-body mx-auto">
              <h6>
                <div className="card-title">{this.state.name}</div>
              </h6>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
