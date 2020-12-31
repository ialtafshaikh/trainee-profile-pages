import React, { Component } from "react";
import headerStyles from "../styles/Header.module.css";
import icon from "../image/icon.png";
// import { FaHome, FaPlus } from "react-icons/fa";
import Navigation from "./Navigation";

class Header extends Component {
  render() {
    return (
      <div className={headerStyles.header}>
        <div className={headerStyles.container}>
          <div id={headerStyles.logo}>
            <img src={icon} alt="logo" />
            <h1 id={headerStyles.h1}>NexTLeVeL</h1>
            <div id={headerStyles.menu}>
              <Navigation />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
