import React, { Component } from 'react'
import headerStyles from "../styles/Header.module.css"

class Header extends Component {
  render() {
    return (
      <div className={headerStyles.header}>
     <div className={headerStyles.container}>
    <div id={headerStyles.logo}>
      <img src="./images/icon.png" alt="logo"/>
      <h1 id={headerStyles.h1}>ExQuiSite</h1>
      <ul id={headerStyles.menu}>
        <li>
          <a href="www.com" title="">Home</a>
        </li>
        <li>
          <a href="www.com" title="">Form</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
    )
  }
}

export default Header
