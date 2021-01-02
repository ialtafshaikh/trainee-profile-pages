import React, { Component } from "react";
import detail from "../styles/CardDetail.module.css";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export default class CardDetail extends Component {
  state = {
    employees: [],
    socialLinks: [],
    // userName:this.props.userName
  };
  componentDidMount = () => {
    fetch(
      `https://trainee-profile-backend.herokuapp.com/employees/${this.props.match.params.employeeId}`
    )
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
          return (
            <div className={detail.box}>
              <div className={detail.details}>
                <img src={employee.imageUrl} alt={employee.firstName} />
                <div>
                  <h1>
                    {employee.firstName} {employee.lastName}
                  </h1>
                  <h3>Company</h3>
                  <p>{employee.company}</p>
                  {/* addd email link to contact */}
                  <h3>Skills</h3>
                  <p>
                    {employee.skills.map((skill) => {
                      return <button className={detail.skills}>{skill}</button>;
                    })}
                  </p>
                </div>
              </div>
              <div className={detail.content}>
                <p>
                  <h4>Hobbies</h4> {employee.hobbies}
                </p>
                <p>
                  <h3>About</h3>
                  {employee.altDescription}
                </p>
                <p>
                  <a href={employee.socialLinks[0].gitHub}>
                    <FaGithub size="2em" />
                  </a>

                  <a href={employee.socialLinks[0].linkedIn}>
                    <FaLinkedin size="2em" color="#0e76a8" />
                  </a>

                  <a href={employee.socialLinks[0].website}>
                    <FaGlobe size="2em" color=" #495e7b" />
                  </a>
                </p>
                <p className={detail.back}>
                  <Link to="/">
                    <AiOutlineArrowLeft size="2em" />
                  </Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
