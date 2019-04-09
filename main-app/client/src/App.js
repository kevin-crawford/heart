import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParticipantProfile from "./components/Participant/Profile";
import Navigation from './components/Navigation/Navigation';
import IntakeForm from "./components/IntakeForm/IntakeForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <Navigation />
        <Switch>
          <Route
            exact={true}
            path="/participants/:id/"
            component={ParticipantProfile}
          />
          <Route exact={true} path="/form" component={IntakeForm} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
