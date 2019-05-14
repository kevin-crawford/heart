import * as React from "react";
import IntakeFormQA from "./IntakeForm.data";
import { DynamicFormContainer } from "components/DynamicForm";
import "./IntakeForm.scss";
import postParticipant from "../../api/postParticipant.api";

class IntakeForm extends React.Component {
  // submit handler for form
  handleFormSubmit(formData) {
    console.log("Form Submitted");
    console.log(formData);
    return postParticipant(formData, this.onSuccess, this.onError);
  }
  // on success of posting a new participant
  // redirect user to new participant profile page?
  // function onSuccess = (res) => {
  //   console.log(res);
  // }
  // if an error occurs, show error at top of the form
  onError = errorMessage => {
    this.setState({ error: errorMessage, loading: false });
  };
  // form button component creates form data object
  // form data is passed to container and handled in the handleSubmitForm
  render() {
    return (
      <div className="intake-form-container">
        <section className="intake-form">
          <h1 className="intake-form-title">Intake Form</h1>

          <DynamicFormContainer
            questions={IntakeFormQA}
            onSubmit={formData => this.handleFormSubmit(formData)}
            editable={true}
          />
        </section>
      </div>
    );
  }
}

export default IntakeForm;
