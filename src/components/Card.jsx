import React, { Component } from "react";
import { Link } from "react-router-dom";
import cardStyle from "../styles/Card.module.css";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default class Card extends Component {
	state = {
		details: true,
	};

	render() {
		return (
			<>
				<div className={cardStyle.box}>
					<div>
						<Link to={"/profile/" + this.props.employee.employeeId}>
							<img
								src={this.props.employee.imageUrl}
								alt={this.props.employee.firstName}
								className={cardStyle.imgWidth}
							/>
							<h1>
								{this.props.employee.firstName}{" "}
								{this.props.employee.lastName}
							</h1>
							<p className={cardStyle.title}>
								{this.props.employee.company}
							</p>
						</Link>
					</div>
					<div className={cardStyle.linkStyle}>
						<p className={cardStyle.links}>
							<a href={this.props.employee.socialLinks[0].gitHub}>
								<FaGithub size="2em" />
							</a>
							<a href={this.props.employee.socialLinks[0].linkedIn}>
								<FaLinkedin size="2em" color="#0e76a8" />
							</a>
							<a href={this.props.employee.socialLinks[0].website}>
								<FaGlobe size="2em" color=" #495e7b" />
							</a>
						</p>
					</div>
				</div>
			</>
		);
	}
}
