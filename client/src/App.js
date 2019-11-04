import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";

import { Home } from "containers";

class App extends PureComponent {
  render() {
    return (
      <>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </>
    );
  }
}

export default App;
