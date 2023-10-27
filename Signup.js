import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign Up</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Enter Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control rounded-0"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Password"
              className="form-control rounded-0"
            ></input>
          </div>
          <button className="btn btn-warning w-100">Sign Up</button>
          <p>You agree to our terms and conditions</p>

          <Link to="/Login" className="btn btn-success border w-100 ">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
