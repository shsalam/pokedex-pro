import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { Dash } from "components";
import { Detail } from "components";
class App extends PureComponent {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={Dash} />
          <Route path="/pokemon/:number" component={Detail} />
        </Switch>
      </>
    );
  }
}

export default App;
