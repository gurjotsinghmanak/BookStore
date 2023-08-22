import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";

import WebRoutes from "routes/WebRoutes";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <WebRoutes />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
