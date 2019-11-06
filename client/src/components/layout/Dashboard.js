import React from "react";
import { Header } from "components";
import { List } from "components";
function dashboard() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col">
          <List />
        </div>
      </div>
    </div>
  );
}

export default dashboard;
