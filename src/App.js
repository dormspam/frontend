import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { isUserLoggedIn } from "./utils/session";
import HomeView from "./components/home/HomeView";
import EventView from "./components/event/EventView";
import LoginView from "./components/login/LoginView";
import SettingsView from "./components/settings/SettingsView";
import VerifyView from "./components/login/VerifyView";
import AdminView from './components/admin/AdminView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=yes" />
            <meta name="theme-color" content="#5f63d4" />
            <link href="https://fonts.googleapis.com/css?family=Fredoka+One|Nunito:300,400,600,700" rel="stylesheet" />
            <title>Dormspam</title>
          </Helmet>
          <Switch>
            <DormspamRoute exact path="/" component={HomeView} />
            <DormspamRoute exact path="/event/:id" component={EventView} />
            <DormspamRoute exact path="/login" component={LoginView} />
            <DormspamRoute exact path="/settings" component={SettingsView} authenticated={true} />
            <DormspamRoute exact path="/admin" component={AdminView} authenticated={true} />
            <DormspamRoute exact path="/verify" component={VerifyView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const DormspamRoute = ({ component: Component, ...rest }) => {
  if (rest.authenticated === true && !isUserLoggedIn()) {
    return <LoginView />;
  } else {
    return <Route
      {...rest}
      render={props =>
        <Component {...props} />
      }
    />;
  }
};

export default App;
