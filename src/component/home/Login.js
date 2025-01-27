import React, { useState } from "react";
import "../../style/login.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Why from "./Why";
import Work from "./Work";
import Footer from "./Footer";
import Household from "./Household";


function Login() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Details:", details);
    navigate("/home");
  };

  return (
    <div>
      <Header />
      <Banner />

      <div className="loginsection">
        <h1 className="loginheader">Welcome Back</h1>
        <p className="loginpara">Please enter your details to login.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={details.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            value={details.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            value={details.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <input
            type="number"
            id="number"
            name="number"
            value={details.number}
            onChange={handleChange}
            placeholder="Enter your number"
            required
          />

          <fieldset>
            <legend>Role</legend>
            <label>
              <input
                type="radio"
                name="role"
                value="customer"
                checked={details.role === "customer"}
                onChange={handleChange}
              />
              Customer
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="worker"
                checked={details.role === "worker"}
                onChange={handleChange}
              />
              Worker
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="company"
                checked={details.role === "company"}
                onChange={handleChange}
              />
              Company
            </label>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
        <p className="registerpara registerlink">
          New to One! Just <Link className="link" to="/register">Register</Link>
        </p>
      </div>
      <Work />
      <Why />
      <Household />
      <Footer />
    </div>
  );
}

export default Login;
