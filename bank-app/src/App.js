import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import "./components/homepage/loginForm.css";
import Dashboard from "./pages/dashboard";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={LoginPage}
          ></Route>
          <Route
            exact
            path="/dashboard"
            component={Dashboard}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
