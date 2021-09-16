import React, { Component } from "react";
import "./style.css";
const { v4: uuid_v4 } = require("uuid");

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      id: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
    };

    this.initialState = this.state;
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkFirstName = () => {
    this.formIsValid = true;
    if (!this.state.firstName) {
      this.setState({ firstNameError: "First Name field is required" });
      this.formIsValid = false;
    } else this.setState({ firstNameError: "" });
    return this.formIsValid;
  };
  checkLastName = () => {
    this.formIsValid = true;
    if (!this.state.lastName) {
      this.setState({ lastNameError: "Last Name field is required" });
      this.formIsValid = false;
    } else this.setState({ lastNameError: "" });
    return this.formIsValid;
  };
  checkEmail = () => {
    this.formIsValid = true;
    if (!this.state.email) {
      this.setState({ emailError: "Email field is required" });
      this.formIsValid = false;
    } else {
      this.setState({ emailError: "" });
    }
    return this.formIsValid;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.checkFirstName() && this.checkLastName() && this.checkEmail()) {
      this.props.add({ ...this.state, id: uuid_v4() });
      this.setState(this.initialState);
    }
  };
  render() {
    const { firstNameError, lastNameError, emailError } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="first-div">
          <label htmlFor="first">First Name:</label>
          <input
            className="first"
            type="text"
            value={this.state.firstName}
            id="first"
            name="firstName"
            onChange={this.handleChange}
            autoFocus
          />
          {firstNameError ? <p className="select">{firstNameError}</p> : null}
        </div>
        <div className="last-div">
          <label htmlFor="last">Last Name:</label>
          <input
            className="last"
            type="text"
            value={this.state.lastName}
            id="last"
            name="lastName"
            onChange={this.handleChange}
          />
          {lastNameError ? <p className="select">{lastNameError}</p> : null}
        </div>
        <div className="email-div">
          <label htmlFor="email">Email:</label>
          <input
            className="email"
            type="email"
            value={this.state.email}
            id="email"
            name="email"
            onChange={this.handleChange}
          />
          {emailError ? <p className="select">{emailError}</p> : null}
        </div>
        <button className="submit-btn">CREATE</button>
      </form>
    );
  }
}
