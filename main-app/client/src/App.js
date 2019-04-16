import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ParticipantProfile from "./components/Participant/Profile";
import IntakeForm from "./components/IntakeForm/IntakeForm";
import "./App.css";
import Navigation from "./components/Navigation/Navigation"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div class="container">
      <Navigation/>
        <Switch>
          <Route
            exact={true}
            path="/participants/:id/"
            component={ParticipantProfile}
          />
          <Route exact={true} path="/form" component={IntakeForm} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
