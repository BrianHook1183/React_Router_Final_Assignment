import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import NotFound from "./common/NotFound";

function App() {
  /*
    *There is no need to add a <Router >, it is in index.js.

    (x)The <CardList /> component should be shown when the user is on the index path.

    (x)The <User /> component should be shown when the user is on the following path:
    /users/:userId

    (x)Display <NotFound /> when appropriate
  */
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact={true} path="/">
          <CardList />
        </Route>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
