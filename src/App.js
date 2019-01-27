import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import EventView from "./components/event/EventView";
import HomeView from "./components/home/HomeView";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="DormspamApp">
          <link href="https://fonts.googleapis.com/css?family=Fredoka+One|Nunito:400,700" rel="stylesheet" />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/event/:id" component={EventView} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
