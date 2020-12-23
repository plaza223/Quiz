import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import DashboardMain from "./Components/Dashboard/Dashboard";

import { getQuestions } from "./api";

getQuestions();
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"><DashboardMain /></Route>
          <Route path="/basicgame">{/* <BasicGame /> */}</Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
