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
            <br />
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                name="lastName"
                className={FormElementStyles.inputField}
              />
            </div>
            <br />
            <div>
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                name="company"
                className={FormElementStyles.inputField}
              />
            </div>
            <br />
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                className={FormElementStyles.inputField}
              />
            </div>
            <br />
            <div>
              <label htmlFor="contact">contact:</label>
              <input
                type="text"
                name="contact"
                className={FormElementStyles.inputField}
              />
            </div>
            <br />
            <div>
              <label htmlFor="imageUrl">ProfilePic:</label>
              <input
                type="file"
                name="imageUrl"
                className={FormElementStyles.inputField}
              />
            </div>
            <br />
            <div>
              <label htmlFor="skills">Skills:</label>
              <input
                type="text"
                name="skills"
                className={FormElementStyles.inputField}
              />
            </div>
            <br />
            <div>
              <label htmlFor="altDescription">About:</label>
              <textarea
                rows="5"
                cols="50"
                name="altDescription"
                className={
                  (FormElementStyles.inputField, FormElementStyles.about)
                }
              />
            </div>
            <br />
            <div>
              <label htmlFor="hobbies">Hobbies:</label>
              <input
                type="text"
                name="hobbies"
                className={FormElementStyles.inputField}
              />
            </div>
            <br />
            <br />
            <div>
              <h3>Social Links:</h3>
              <label htmlFor="gitHub">gitHub</label>
              <input
                type="text"
                name="gitHub"
                className={FormElementStyles.inputField}
              />
              <br />
              <label htmlFor="linkedIn">LinkedIn</label>
              <input
                type="text"
                name="linkedIn"
                className={FormElementStyles.inputField}
              />
              <br />
              <label htmlFor="website">Website</label>
              <input
                type="text"
                name="website"
                className={FormElementStyles.inputField}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
