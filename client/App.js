import React from "react";
import "react-hot-loader/patch";
import { hot } from "react-hot-loader";
import MainRouter from "./MainRouter";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default hot(module)(App);
