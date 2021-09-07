import React, { useState } from "react";
import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContextProvider } from "./Context";

export const API = "http://206.189.91.54";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="register-link">
            <UserRegistration />
          </Route>
          <UserContextProvider>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          </UserContextProvider>
        </Switch>
      </Router>
    </div>
  );
}
