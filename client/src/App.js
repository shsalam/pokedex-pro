import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "components";
import { Dash } from "components";
import { Detail } from "components";
class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Dash} />
          <Route path="/pokemon/:number" component={Detail} />
        </Switch>
      </>
    );
  }
}

export default App;
