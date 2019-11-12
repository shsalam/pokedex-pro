import React from "react";

function General(props) {
  return (
    <div className="card-body">
      <div className="row align-items-center">
        <div className=" col-md-3 ">
          <img
            src={props.spriteURL}
            className="card-img-top img-thumbnail rounded mx-auto mt-2"
            alt=""
          />
        </div>
        <div className="col-md-9">
          <h4 className="mx-auto">{props.name}</h4>
          <div className="row align-items-center">
            <div className={`col-12 col-md-${props.titleWidth}`}>HP</div>
            <div className={`col-12 col-md-${props.barWidth}`}>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{
                    width: `${props.hp}%`,
                    backgroundColor: `#${props.themeColor}`
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{props.hp}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className={`col-12 col-md-${props.titleWidth}`}>Attack</div>
            <div className={`col-12 col-md-${props.barWidth}`}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${props.attack}%`,
                    backgroundColor: `#${props.themeColor}`
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{props.attack}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className={`col-12 col-md-${props.titleWidth}`}>Defense</div>
            <div className={`col-12 col-md-${props.barWidth}`}>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{
                    width: `${props.defense}%`,
                    backgroundColor: `#${props.themeColor}`
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{props.defense}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className={`col-12 col-md-${props.titleWidth}`}>Speed</div>
            <div className={`col-12 col-md-${props.barWidth}`}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${props.speed}%`,
                    backgroundColor: `#${props.themeColor}`
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{props.speed}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className={`col-12 col-md-${props.titleWidth}`}>Sp Atk</div>
            <div className={`col-12 col-md-${props.barWidth}`}>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${props.spAttack}%`,
                    backgroundColor: `#${props.themeColor}`
                  }}
                  aria-valuenow={props.spAttack}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{props.spAttack}</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className={`col-12 col-md-${props.titleWidth}`}>Sp Def</div>
            <div className={`col-12 col-md-${props.barWidth}`}>
              <div className="progress">
                <div
                  className="progress-bar "
                  role="progressbar"
                  style={{
                    width: `${props.spDefense}%`,
                    backgroundColor: `#${props.themeColor}`
                  }}
                  aria-valuenow={props.spDefense}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <small>{props.spDefense}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col">
          <p className="">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default General;
