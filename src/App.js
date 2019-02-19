import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { isUserLoggedIn } from "./utils/session";
import HomeView from "./components/home/HomeView";
import LoginView from "./components/login/LoginView";
import SettingsView from "./components/settings/SettingsView";
import VerifyView from "./components/login/VerifyView";

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
            <DormspamRoute exact path="/" component={HomeView} />
            <DormspamRoute exact path="/login" component={LoginView} authenticated={false} />
            <DormspamRoute exact path="/settings" component={SettingsView} />
            <DormspamRoute exact path="/verify" component={VerifyView} authenticated={false} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const DormspamRoute = ({ component: Component, ...rest }) => {
  if (isUserLoggedIn() || rest.authenticated === false) {
    return <Route
      {...rest}
      render={props =>
        <Component {...props} />
      }
    />;
  } else {
    return <LoginView />;
  }
};

export default App;
