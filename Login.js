import React, { useState } from "react";
import { Link } from "react-router-dom";

import Validation from "./Loginvalidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleEvent = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Log In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              name="email"
              onChange={handleEvent}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              name="password"
              onChange={handleEvent}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
          <p>You agree to our terms and conditions</p>

          <Link to="/Signup" className="btn btn-default border w-100 bg-light">
            Create New Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
