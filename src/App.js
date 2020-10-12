import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";

import Search from "./Search/Search";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div class="main-page">
        <Header></Header>
        <Switch>
          <Route exact path="/search">
            <Search></Search>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
