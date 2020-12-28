import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/about" exact component={AboutUs} />
            <Route path="/contact" exact component={ContactUs} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
