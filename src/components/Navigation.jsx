import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavigationStyles from "../styles/Navigation.module.css";
import { FaHome, FaPlus } from "react-icons/fa";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <p id={NavigationStyles.menu}>
          <Link to="/">
            <FaHome />
          </Link>
          <Link to="/form">
            <FaPlus />
          </Link>
        </p>
      </div>
    );
  }
}
