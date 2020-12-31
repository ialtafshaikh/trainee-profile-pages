// dont touch this file

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";

//components

import Header from "../components/Header";
import Footer from "../components/Footer";
import CardDetail from "../components/CardDetail";

export default class Router extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile/:employeeId" exact component={CardDetail} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
