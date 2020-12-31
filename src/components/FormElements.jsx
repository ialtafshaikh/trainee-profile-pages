import React, { Component } from "react";
import FormElementStyles from "../styles/Form.module.css";

export default class FormElements extends Component {
  render() {
    return (
      <div>
        <div className={FormElementStyles.mainDiv}>
          <h1>Add&nbsp;Employee</h1>
          <div className={FormElementStyles.elementContainer1}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                name="firstName"
                className={FormElementStyles.inputField}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                className={FormElementStyles.inputField}
              />
            </div>
          </div>
          <div className={FormElementStyles.elementContainer1}>
            <div>
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                name="company"
                className={FormElementStyles.inputField}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                className={FormElementStyles.inputField}
              />
            </div>
          </div>

          <div className={FormElementStyles.elementContainer1}>
            <div>
              <label htmlFor="contact">contact:</label>
              <input
                type="text"
                name="contact"
                className={FormElementStyles.inputField}
              />
            </div>
            <div>
              <label htmlFor="imageUrl">ProfilePic:</label>
              <input
                type="file"
                name="imageUrl"
                className={FormElementStyles.inputField}
              />
            </div>
          </div>

          <div className={FormElementStyles.elementContainer1}>
            <div>
              <label htmlFor="skills">Skills:</label>
              <input
                type="text"
                name="skills"
                className={FormElementStyles.inputField}
              />
            </div>
            <div>
              <label htmlFor="altDescription">About:</label>
              <input
                type="text"
                name="altDescription"
                className={FormElementStyles.inputField}
              />
            </div>
          </div>

          <div className={FormElementStyles.elementContainer1}>
            <div>
              <label htmlFor="hobbies">Hobbies:</label>
              <input
                type="text"
                name="hobbies"
                className={FormElementStyles.inputField}
              />
            </div>
            <div>
              <label htmlFor="socialLinks">Social Links:</label>
              <input
                type="text"
                name="socialLinks"
                className={FormElementStyles.inputField}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
