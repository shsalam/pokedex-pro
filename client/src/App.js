import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { Dash } from "components";

class App extends PureComponent {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Dash} />
        </Switch>
      </>
    );
  }
}

export default App;
