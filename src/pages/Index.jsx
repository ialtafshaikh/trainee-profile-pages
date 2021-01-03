import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import indexStyle from "../styles/Index.module.css";

export default class Index extends Component {
	render() {
		return (
			<div>
				<ParticlesBg num={200} type="square" bg={true} />;
				<div className={indexStyle.divIndex}>
					<h1 className={indexStyle.indexh1}>NexT LeVel</h1>
					<p className={indexStyle.indexp}>
						Because, what's Inside, get's a Count...!!!{" "}
					</p>
				</div>
			</div>
		);
	}
}
