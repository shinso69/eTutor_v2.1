import React, { Component } from "react";
import FormUserInfo from "./FormUserInfo";
import Confirmation from "./Confirmation";
import Success from "./Success";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  msg: "",
  nameError: "",
  lastNameError: "",
  emailError: "",
  msgError: ""
};

export class UserForm extends Component {
  state = initialState;

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  validate = () => {
    // let nameError = "";
    // let lastNameError = "";
    let emailError = "";
    // let msgError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Email no es correcto";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      msg,
      nameError,
      lastNameError,
      emailError,
      msgError
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      msg
    };

    const errors = {
      nameError,
      lastNameError,
      emailError,
      msgError
    };

    switch (step) {
      case 1:
        return (
          <FormUserInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            errors={errors}
            validate={this.validate}
          />
        );

      case 2:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 3:
        return <Success />;
    }
  }
}

export default UserForm;
