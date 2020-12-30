import React, { Component } from "react";
import Card from "./Card";

export default class CardList extends Component {
  state = {
    employees: [],
    // userName:this.props.userName
  };

  componentDidMount = () => {
    fetch("https://trainee-profile-backend.herokuapp.com/employees")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ employees: data.data });
      });
  };

  render() {
    return (
      <div>
        {this.state.employees.map((employee) => {
          return <Card employee={employee} key={employee.employeeId} />;
        })}
      </div>
    );
  }
}
