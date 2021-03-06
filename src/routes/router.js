// dont touch this file

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "../pages/Index";
import Profiles from "../pages/Profiles";
import Form from "../pages/Form";

//components

import Header from "../components/Header";
import Footer from "../components/Footer";
import CardDetail from "../components/CardDetail";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profiles" exact component={Profiles} />
            <Route path="/profile/:employeeId" exact component={CardDetail} />
            <Route path="/form" exact component={Form} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
