import React from "react";
import "./style/App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>I am checkout</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
