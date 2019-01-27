import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import EventView from "./components/event/EventView";
import HomeView from "./components/home/HomeView";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
