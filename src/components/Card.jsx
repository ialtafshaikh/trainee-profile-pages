import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.employee.imageUrl}
          alt={this.props.employee.firstName}
        />
        <p>
          {this.props.employee.firstName} {this.props.employee.lastName}
        </p>
        <p>Company: {this.props.employee.company} </p>
      </div>
    );
  }
}
