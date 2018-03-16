import React from 'react';
import { Applications } from './../api/applications';

export default class Signup extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
          error: ''
      };
  }

  onSubmit(e) {
    e.preventDefault();
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;
    let year = e.target.year.value;
    let major = e.target.major.value;
    let description = e.target.description.value;
    let email = this.refs.email.value.trim();
    
    if (
      firstName &&
      lastName &&
      year &&
      major &&
      description &&
      email
    ) {
      Applications.insert({
        firstName,
        lastName,
        year,
        major,
        description,
        email
      })     
    }
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Apply for the Biohack</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="firstName" ref="firstName" name="firstName" placeholder="Your first name" />
            <input type="lastName" ref="lastName" name="lastName" placeholder="Your last name" />
            <input type="year" ref="year" name="year" placeholder="ie. Sophomore" />
            <input type="major" ref="major" name="major" placeholder="ie. Bioengineer" />
            <input type="email" ref="email" name="email" placeholder="Email" />
            <textarea type="description" ref="description" name="description" placeholder="Please describe what your project will be" />

            <button className="button">Apply</button>
          </form>
        </div>
      </div>
    )
  }
}