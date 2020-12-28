import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import AboutUs from "../pages/AboutUs";
import Test from "../pages/test";
import ContactUs from "../pages/ContactUs";
import Dummy from "../pages/dummy";

export default class Router extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route path="/about" exact component={AboutUs} />
						<Route path="/contact" exact component={ContactUs} />
						<Route path="/test" exact component={Test} />
						<Route path="/dummy" exact component={Dummy} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}
