// dont touch this file

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages


import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
           
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
