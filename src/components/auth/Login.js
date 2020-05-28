import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Local hooks
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Object destructuring
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validate

    // send to action
  };

  return (
    <div className="form-user">
      <div className="container-form dark">
        <h1>Log In</h1>

        <form onSubmit={onSubmit}>
          <div className="field-form">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="field-form">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
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
