import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { HashRouter, Route, Switch } from "react-router-dom";

import EventView from "./components/event/EventView";
import HomeView from "./components/home/HomeView";
import SettingsView from "./components/settings/SettingsView";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#5f63d4" />
            <link href="https://fonts.googleapis.com/css?family=Fredoka+One|Nunito:300,400,600,700" rel="stylesheet" />
            <title>Dormspam</title>
          </Helmet>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/event/:id" component={EventView} />
            <Route exact path="/settings" component={SettingsView} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
