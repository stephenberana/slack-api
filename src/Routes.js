import React from "react";
import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export const API = "http://206.189.91.54";

export const AuthenticatedRoutes = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export const UnauthenticatedRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="register-link">
          <UserRegistration />
        </Route>
      </Switch>
    </Router>
  );
};
