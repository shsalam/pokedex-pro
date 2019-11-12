import React, { Component } from "react";
import axios from "axios";
import { Profile, General } from "components";
import TYPE_COLORS from "../../helpers/colors";
export default class Detail extends Component {
  // description state
  state = {
    name: "",
    number: "",
    sprite: "",
    types: [], // more than 1
    description: "",
    statTitleWidth: 3,
    statBarWidth: 9,
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: ""
    },
    height: "",
    weight: "",
    eggGroups: "",
    catchRate: "",
    abilities: "",
    genderRatioMale: "",
    genderRatioFemale: "",
    evs: "",
    hatchSteps: "",
    weakness: "",
    themeColor: "#EF5350" // default
  };

  async componentDidMount() {
    const { number } = this.props.match.params; // pokemon number
    // urls for pokemon information
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${number}/`;
    const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${number}/`;

    // get basic pokemon info
    const pokemonRes = await axios.get(pokeURL);
    const name = pokemonRes.data.name;
    const sprite = pokemonRes.data.sprites.front_default;
    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";
    //map through stats object
    pokemonRes.data.stats.map(stat => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
        default:
          break;
      }
    });
    // height and weight conversion
    const height =
      Math.round((pokemonRes.data.height * 0.328084 + 0.00001) * 100) / 100;
    const weight =
      Math.round((pokemonRes.data.weight * 0.220462 + 0.00001) * 100) / 100;
    //pokemon types
    const types = pokemonRes.data.types.map(type => type.type.name);
    const themeColor = `${TYPE_COLORS[types[types.length - 1]]}`;
    const abilities = pokemonRes.data.abilities
      .map(ability => {
        return ability.ability.name
          .toLowerCase()
          .split("-")
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
      })
      .join(", ");
    const evs = pokemonRes.data.stats
      .filter(stat => {
        if (stat.effort > 0) {
          return true;
        }
        return false;
      })
      .map(stat => {
        return `${stat.effort} ${stat.stat.name
          .toLowerCase()
          .split("-")
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ")}`;
      })
      .join(", ");
    //pokemon description
    await axios.get(speciesURL).then(res => {
      let description = "";
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === "en") {
          description = flavor.flavor_text;
          return;
        }
      });
      //gender ratio
      const femaleRate = res.data["gender_rate"];
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8 - femaleRate);
      //capture rate
      const catchRate = Math.round((100 / 255) * res.data["capture_rate"]);
      //egg groups
      const eggGroups = res.data["egg_groups"]
        .map(group => {
          return group.name
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
        })
        .join(", ");
      //hatch conversion
      const hatchSteps = 255 * (res.data["hatch_counter"] + 1);
      //Updating State for General and Profile
      this.setState({
        description,
        genderRatioFemale,
        genderRatioMale,
        catchRate,
        eggGroups,
        hatchSteps
      });
    });
    this.setState({
      sprite,
      number,
      name,
      types,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense
      },
      themeColor,
      height,
      weight,
      abilities,
      evs
    });
  }
  //Render gets split into two main components, General.js and Profile.js
  render() {
    return (
      <div className="col">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>{this.state.number}</h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  {this.state.types.map(type => (
                    <span
                      key={type}
                      className="badge badge-pill mr-1"
                      style={{
                        backgroundColor: `#${TYPE_COLORS[type]}`,
                        color: "white"
                      }}
                    >
                      {type
                        .toLowerCase()
                        .split(" ")
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                        .join(" ")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <General
            spriteURL={this.state.sprite}
            name={this.state.name}
            titleWidth={this.state.statTitleWidth}
            barWidth={this.state.statBarWidth}
            hp={this.state.stats.hp}
            attack={this.state.stats.attack}
            defense={this.state.stats.defense}
            speed={this.state.stats.speed}
            spAttack={this.state.stats.specialAttack}
            spDefense={this.state.stats.specialDefense}
            themeColor={this.state.themeColor}
            description={this.state.description}
          />
          <hr />
          <Profile
            height={this.state.height}
            weight={this.state.weight}
            catchRate={this.state.catchRate}
            genderRatioFemale={this.state.genderRatioFemale}
            genderRatioMale={this.state.genderRatioMale}
            eggGroups={this.state.eggGroups}
            hatchSteps={this.state.hatchSteps}
            abilities={this.state.abilities}
            evs={this.state.evs}
          />
          <div class="card-footer text-muted">Sample Footer Text</div>
        </div>
      </div>
    );
  }
}
