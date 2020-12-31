import { Component } from "react";
import url from "../components/ApiCall";
import FormElements from "../components/FormElements";
import FormElementStyles from "../styles/Form.module.css";
//component to add employee form
class AddEmployeeForm extends Component {
  //add new employee details from form
  submitForm = (event) => {
    event.preventDefault();
    // event.target.skills.value

    fetch(url, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        company: event.target.company.value,
        email: event.target.email.value,
        contact: event.target.contact.value,
        imageUrl: event.target.imageUrl.value,
        skills: [event.target.skills.value],
        altDescription: event.target.altDescription.value,
        hobbies: [event.target.hobbies.value],
        socialLinks: [event.target.socialLinks.value],
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //markup for add employee form
  render() {
    return (
      <div className={FormElementStyles.container}>
        <form onSubmit={this.submitForm}>
          <FormElements />
          <div className={FormElementStyles.buttons}>
            <button
              type="submit"
              value="submit"
              className={FormElementStyles.button}
            >
              Submit
            </button>
            &nbsp;&nbsp;
            <button
              type="reset"
              value="Reset"
              className={FormElementStyles.button}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddEmployeeForm;
