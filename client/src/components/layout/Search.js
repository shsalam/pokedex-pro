import React, { Component } from "react";
import { Form } from "components";
export default class Search extends Component {
  state = { term: "" };

  handleChange = e => {
    this.setState({ term: e.target.value });
  };
  render() {
    /*  let poke = this.props.find
      ? this.props.find.filter(poke => {
          return poke.name.indexOf(this.state.term) !== -1;
        })
      : null;


      {poke ? (
          <div className="row">
            {poke.map(pokemon => (
              <li>{pokemon.name}</li>
            ))}
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      */

    return (
      <div>
        <Form handleChange={this.handleChange}></Form>
      </div>
    );
  }
}
