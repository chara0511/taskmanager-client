import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import alertContext from "../../context/alerts/alertContext";
import authContext from "../../context/auth/authContext";

const Login = (props) => {
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

  const authenticationContext = useContext(authContext);
  const { auth, message, logIn } = authenticationContext;

  // For user mail not exist || password invalid
  useEffect(() => {
    if (auth) {
      props.history.push("/projects");
    }

    if (message) {
      showAlert(message.msg, message.category);
    }
    // eslint-disable-next-line
  }, [auth, message, props.history]);

  // Local hooks
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Object destructuring
  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validate empty fields
    if (email.trim() === "" || password.trim() === "") {
      showAlert("All fields are required", "alert-error");
    }

    // send to action
    logIn({ email, password });
  };

  return (
    <div className="form-user">
      <div className="container-form dark">
        <h1>Log In</h1>

        {alert ? (
          <div className={`alert ${alert.category}`}>{alert.msg}</div>
        ) : null}
        <form onSubmit={onSubmit}>
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
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Log In"
            />
          </div>
        </form>

        <Link to={"/new-account"} className="account-link">
          <strong>Sign Up</strong>, It's quick and easy.
        </Link>
      </div>
    </div>
  );
};

export default Login;
