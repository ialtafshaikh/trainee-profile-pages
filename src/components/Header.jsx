import React from "react";
//import './App.css';

function Header() {
  return (
    <div class="container">
    <div id="logo">
      <img src="./images/icon.png" />
      <h1 id="header-h1">ExQuiSite</h1>
      <ul id="menu">
        <li>
          <a href="/#" title="">Home</a>
        </li>
        <li>
          <a href="/#" title="">Form</a>
        </li>
      </ul>
    </div>
  </div>
  );
}

export default Header;
