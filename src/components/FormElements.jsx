import React, { Component } from "react";
import FormElementStyles from "../styles/Form.module.css";

export default class FormElements extends Component {
	render() {
		return (
			<div>
				<div className={FormElementStyles.mainDiv}>
					<h1>Add Employee</h1>
					<div className={FormElementStyles.elementContainer1}>
						<div>
							<input
								type="text"
								name="firstName"
								className={FormElementStyles.inputField}
								required
								placeholder="First Name"
							/>
						</div>
						<br />
						<div>
							<input
								type="text"
								name="lastName"
								className={FormElementStyles.inputField}
								required
								placeholder="Last Name"
							/>
						</div>
						<br />
						<div>
							<input
								type="text"
								name="company"
								className={FormElementStyles.inputField}
								required
								placeholder="Company"
							/>
						</div>
						<br />
						<div>
							<input
								type="text"
								name="email"
								className={FormElementStyles.inputField}
								required
								placeholder="Email"
							/>
						</div>
						<br />
						<div>
							<input
								type="text"
								name="contact"
								className={FormElementStyles.inputField}
								required
								placeholder="Contact"
							/>
						</div>
						<br />
						<div>
							<label htmlFor="imageUrl">ProfilePic:</label>
							<input
								type="file"
								name="imageUrl"
								className={FormElementStyles.inputField}
								required
							/>
						</div>
						<br />
						<div>
							<input
								type="text"
								name="skills"
								className={FormElementStyles.inputField}
								required
								placeholder="Skills"
							/>
						</div>
						<br />
						<div>
							<textarea
								rows="5"
								cols="50"
								name="altDescription"
								className={
									(FormElementStyles.inputField,
									FormElementStyles.about)
								}
								placeholder="About"
							/>
						</div>
						<br />
						<div>
							<input
								type="text"
								name="hobbies"
								className={FormElementStyles.inputField}
								placeholder="Hobbies"
							/>
						</div>
						<br />
						<br />
						<div>
							<h3>Social Links:</h3>
							<input
								type="text"
								name="gitHub"
								className={FormElementStyles.inputField}
								placeholder="GitHub"
							/>
							<br />
							<input
								type="text"
								name="linkedIn"
								className={FormElementStyles.inputField}
								placeholder="LinkedIn"
							/>
							<br />
							<input
								type="text"
								name="website"
								className={FormElementStyles.inputField}
								placeholder="Website"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
