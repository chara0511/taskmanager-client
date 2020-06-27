import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import alertContext from "../../context/alerts/alertContext";
import authContext from "../../context/auth/authContext";

const NewAccount = (props) => {
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  const authenticationContext = useContext(authContext);
  const { auth, message, signUpUser } = authenticationContext;

  // For user mail auth || user mail signup || existing user
  useEffect(() => {
    if (auth) {
      props.history.push("/projects");
    }

    if (message) {
      showAlert(message.msg, message.category);
    }
    // eslint-disable-next-line
  }, [auth, message, props.history]);

  // State to login
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  // Object destructuring
  const { name, email, password, confirm } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validate empty fields
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      showAlert("All fields are required", "alert-error");
      return;
    }
    // min password of 6 characters
    if (password.length < 6) {
      showAlert("Password min 6 characters", "alert-error");
      return;
    }

    // 2 same password
    if (password !== confirm) {
      showAlert("Password diferents", "alert-error");
      return;
    }

    // send to action
    signUpUser({ name, email, password });
  };

  return (
    <div className="form-user">
      <div className="container-form dark">
        <h1>Sign up for free start</h1>

        {alert ? (
          <div className={`alert ${alert.category}`}>{alert.msg}</div>
        ) : null}

        <form onSubmit={onSubmit}>
          <div className="field-form">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="field-form">
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="field-form">
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="field-form">
            <label htmlFor="confirm">Confirm password: </label>
            <input
              id="confirm"
              name="confirm"
              type="password"
              placeholder="Confirm password"
              value={confirm}
              onChange={onChange}
            />
          </div>

          <div className="field-form">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign Up"
            />
          </div>
        </form>

        <Link to={"/"} className="account-link">
          Back to <strong>Log In</strong>.
        </Link>
      </div>
    </div>
  );
};

export default NewAccount;
