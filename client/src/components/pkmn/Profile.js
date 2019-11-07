import React from "react";

function Profile(props) {
  return (
    <div className="card-body">
      <h5 class="card-title text-center">Profile</h5>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <h6 className="float-right">Height:</h6>
            </div>
            <div className="col-6">
              <h6 className="float-left">{props.height} ft.</h6>
            </div>
            <div className="col-6">
              <h6 className="float-right">Weight:</h6>
            </div>
            <div className="col-6">
              <h6 className="float-left">{props.weight} lbs</h6>
            </div>
            <div className="col-6">
              <h6 className="float-right">Catch Rate:</h6>
            </div>
            <div className="col-6">
              <h6 className="float-left">{props.catchRate}%</h6>
            </div>
            <div className="col-6">
              <h6 className="float-right">Gender Ratio:</h6>
            </div>
            <div className="col-6">
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${props.genderRatioFemale}%`,
                    backgroundColor: "#c2185b"
                  }}
                  aria-valuenow="15"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{props.genderRatioFemale}</small>
                </div>
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${props.genderRatioMale}%`,
                    backgroundColor: "#1976d2"
                  }}
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{props.genderRatioMale}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-6">
              <h6 className="float-right">Egg Groups:</h6>
            </div>
            <div className="col-6">
              <h6 className="float-left">{props.eggGroups} </h6>
            </div>
            <div className="col-6">
              <h6 className="float-right">Hatch Steps:</h6>
            </div>
            <div className="col-6">
              <h6 className="float-left">{props.hatchSteps}</h6>
            </div>
            <div className="col-6">
              <h6 className="float-right">Abilities:</h6>
            </div>
            <div className="col-6">
              <h6 className="float-left">{props.abilities}</h6>
            </div>
            <div className="col-6">
              <h6 className="float-right">EVs:</h6>
            </div>
            <div className="col-6">
              <h6 className="float-left">{props.evs}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
