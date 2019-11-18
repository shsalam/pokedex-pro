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
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
    this.setState({ name, sprite, number });
  }
  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-3">
        <Link to={`pokemon/${this.state.number}`}>
          <div className="card">
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ requests: true })}
              src={this.state.sprite}
            ></Sprite>

            <div className="card-body float-left">
              <h6>
                <div className="card-title">
                  {this.state.name}{" "}
                  <span class="float-right">{this.state.number} </span>
                </div>
              </h6>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
