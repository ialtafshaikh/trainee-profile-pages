import React from "react";
import footerStyles from "../styles/Footer.module.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
	return (
		<div id={footerStyles.copyright}>
			<p>
				&copy; Team NexT LeVeL. All rights reserved. | Design by Team NexT
				LeVeL
			</p>
			<ul className={footerStyles.contact}>
				<li>
					<a href="/#">
						<FaTwitter size="2em" color="cyan" />
					</a>
				</li>
				<li>
					<a href="/#">
						<FaFacebook size="2em" color="#00acee" />
					</a>
				</li>
				<li>
					<a href="/#">
						<FaInstagram size="2em" className={footerStyles.insta} />
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Footer;
