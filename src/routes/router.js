// dont touch this file

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import AboutUs from "../pages/AboutUs";
import Test from "../pages/test";
import ContactUs from "../pages/ContactUs";
import Test2 from "../pages/test2";
import Cards from "../pages/Cards";

export default class Router extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route path="/about" exact component={AboutUs} />
						<Route path="/cards" exact component={Cards} />
						<Route path="/contact" exact component={ContactUs} />
						<Route path="/test" exact component={Test} />
						<Route path="/test2" exact component={Test2} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
