import { Component } from "react";
import url from "../components/ApiCall";
import FormElements from "../components/FormElements";
import FormElementStyles from "../styles/Form.module.css";
//component to add employee form
class AddEmployeeForm extends Component {
  //add new employee details from form
  submitForm = (event) => {
    event.preventDefault();
    // console.log(event.target.imageUrl.files[0]);
    let form = event.target;
    let formObj = new FormData();
    formObj.append("firstName", form.firstName.value);
    formObj.append("lastName", form.lastName.value);
    formObj.append("company", form.company.value);
    formObj.append("email", form.email.value);
    formObj.append("contact", form.contact.value);
    formObj.append("imageUrl", form.imageUrl.files[0]);
    formObj.append("skills", form.skills.value.split(","));
    formObj.append("altDescription", form.altDescription.value);
    formObj.append("hobbies", form.hobbies.value.split(","));
    formObj.append("gitHub", form.gitHub.value);
    formObj.append("linkedIn", form.linkedIn.value);
    formObj.append("website", form.website.value);

    fetch(url, {
      method: "POST",

      mode: "cors",
      body: formObj,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Formed Submitted Successfully");

        form.reset();
      })
      .catch((err) => {
        console.log(err);
        alert("Formed Failed to Sumbit!!");
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
