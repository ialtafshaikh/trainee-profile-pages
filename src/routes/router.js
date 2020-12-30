// dont touch this file

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import AboutUs from "../pages/AboutUs";
import Test from "../pages/test";
import ContactUs from "../pages/ContactUs";
import Test2 from "../pages/test2";
import Cards from "../components/Cards";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/about" exact component={AboutUs} />
            <Route path="/cards" exact component={Cards} />
            <Route path="/contact" exact component={ContactUs} />
            <Route path="/test" exact component={Test} />
            <Route path="/test2" exact component={Test2} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
