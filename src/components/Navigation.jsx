import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigationStyles from "../styles/Navigation.module.css";
import { FaHome, FaRegIdCard, FaPlus } from "react-icons/fa";

export default class Navigation extends Component {
	render() {
		return (
			<div>
				<p id={NavigationStyles.menu}>
					<Link to="/">
						<FaHome title="Home" />
					</Link>
					<Link to="/profiles">
						<FaRegIdCard title="Employee Profiles" />
					</Link>
					<Link to="/form">
						<FaPlus title="Employee Add" />
					</Link>
				</p>
			</div>
		);
	}
}
