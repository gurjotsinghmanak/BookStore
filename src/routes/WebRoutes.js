import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "pages/Home";
import NotFound from "pages/NotFound";

function WebRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/not-found">
        <NotFound />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, null)(WebRoutes);
