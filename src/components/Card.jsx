import React, { Component } from "react";
import { Link } from "react-router-dom";
import cardStyle from "../styles/Card.module.css";

export default class Card extends Component {
  state = {
    details: true,
  };

  render() {
    return (
      <Link to={"/profile/" + this.props.employee.employeeId}>
        <div className={cardStyle.box}>
          <img
            src={this.props.employee.imageUrl}
            alt={this.props.employee.firstName}
            className={cardStyle.imgWidth}
          />
          <h1>
            {this.props.employee.firstName} {this.props.employee.lastName}
          </h1>
          <p className={cardStyle.title}>
            Company: {this.props.employee.company}
          </p>
        </div>
      </Link>
    );
  }
}
