/**
 * Form.js
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormLabel from './FormLabel';
import LoadingButton from '../LoadingButton';
import styles from './form.css';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: 'admin',
      password: '*****',
    };
  }

  handleChange = (e) => {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      formUsername: this.state.username,
      formPassword: this.state.password,
    };

    // if (formData.formUsername.length < 1 || formData.formPassword.length < 1) {
    //   return false;
    // }

// Dispatch action SET_AUTHs
    this.props.loginUser(formData);
//  Then, Clear form
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <form className={styles.reactForm} onSubmit={this.handleSubmit}>
        <h1>Login Form</h1>

        <fieldset className="form-group">
          <FormLabel htmlFor="formUsername" title="Full Name:" />

          <input
            id="formUsername"
            className="form-input"
            name="username"
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.username}
          />
        </fieldset>

        <fieldset className="form-group">
          <FormLabel htmlFor="formPassword" title="Password:" />

          <input
            id="formPassword"
            className="form-input"
            name="password"
            type="text"
            required
            onChange={this.handleChange}
            value={this.state.password}
          />
        </fieldset>

        <div className="form-group">
          {this.props.currentlySending ? (
            <LoadingButton />
            ) : (
              <button id="formButton" className={styles.btn} type="submit">Log In</button>
          )}
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func,
  currentlySending: PropTypes.bool,
};

LoginForm.defaultProps = {
  loginUser: (loggedIn = false) => loggedIn,
  currentlySending: false,
};

export default LoginForm;
