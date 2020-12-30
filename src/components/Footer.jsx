import React from "react";
import footerStyles from "../styles/Footer.module.css"

function Footer() {
  return (
    <div id={footerStyles.copyright}>
        <p>&copy; ExQuiSite. All rights reserved. | Design by Team ExQuiSite</p>
        <ul className={footerStyles.contact}>
          <li>
            <a href="www.twitter.com"><span className="fa fa-twitter fa-2x"></span></a>
          </li>
          <li>
            <a href="www.facebook.com"><span className="fa fa-facebook fa-2x"></span></a>
          </li>
          <li>
            <a href="www.instagram.com"><span className="fa fa-instagram fa-2x"></span></a>
          </li>
        </ul>
      </div>
  );
}

export default Footer;