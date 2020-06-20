import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import alertContext from "../../context/alerts/alertContext";

const NewAccount = () => {
  const alertsContext = useContext(alertContext);
  const { alert, showAlert } = alertsContext;

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
    }
    // min password of 6 characters

    // same password

    // send to action
  };

  return (
    <div className="form-user">
      <div className="container-form dark">
        <h1>Sign In</h1>

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
              value="Sign In"
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
