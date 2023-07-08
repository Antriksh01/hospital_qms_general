import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const validateForm = () => {
    const errors = {};

    if (username.trim() === "") {
      errors.username = "Username is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Invalid Email";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneno)) {
      errors.phone = "Invalid Phone No format";
    }

    if (password.length < 8) {
      errors.password = "Password should be a minimum of 8 characters";
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        navigate("/");
        // Create an object with the user data
        const userData = {
          username,
          email,
          phoneno,
          password,
        };

        // Send a POST request to the backend endpoint
        const response = await axios.post(
          "http://localhost:5000/api/auth/register",
          userData
        );

        console.log("Form submitted successfully");
        swal(
          "Registeration SuccessFull!",
          "You clicked the button!",
          "success"
        );
        setUsername("");
        setEmail("");
        setPhoneno("");
        setPassword("");
        setConfirmPassword("");
        console.log(response.data);
      } catch (error) {
        console.error("Error occurred while submitting the form:", error);
      }
    }
  };

  return (
    <div>
      <form
        className="py-3"
        style={{ height: "100vh" }}
        onSubmit={handleSubmit}
      >
        <div className="container h-100">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-sm-12 col-md-10 col-lg-5">
              <div className="card rounded-4">
                <div className="card-body py-sm-4 px-sm-5 px-4 py-4">
                  <h2 className="card-title text-center mb-4">Register</h2>
                  <div className="form-outline">
                    <label htmlFor="userName" className="fw-semibold">
                      Username
                    </label>
                    <input
                      type="text"
                      id="userName"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control form-control-lg my-2"
                      style={{ fontSize: "1rem" }}
                    />
                    {errors.username && (
                      <span className="text-danger">{errors.username}</span>
                    )}
                  </div>
                  <div className="form-outline">
                    <label htmlFor="email" className="fw-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control form-control-lg my-2"
                      style={{ fontSize: "1rem" }}
                    />
                    {errors.email && (
                      <span className="text-danger">{errors.email}</span>
                    )}
                  </div>
                  <div className="form-outline">
                    <label htmlFor="phone" className="fw-semibold">
                      PhoneNo
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phoneno}
                      onChange={(e) => setPhoneno(e.target.value)}
                      className="form-control form-control-lg my-2"
                      style={{ fontSize: "1rem" }}
                    />
                    {errors.phone && (
                      <span className="text-danger">{errors.phone}</span>
                    )}
                  </div>
                  <div className="form-outline">
                    <label htmlFor="password" className="fw-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control form-control-lg my-2"
                      style={{ fontSize: "1rem" }}
                    />
                    {errors.password && (
                      <span className="text-danger">{errors.password}</span>
                    )}
                  </div>
                  <div className="form-outline">
                    <label htmlFor="confirmPassword" className="fw-semibold">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control form-control-lg my-2"
                    />
                    {errors.confirmPassword && (
                      <span className="text-danger">
                        {errors.confirmPassword}
                      </span>
                    )}
                  </div>
                  <button
                    className="btn btn-primary d-flex justify-content-center mt-4 fw-semibold py-2 w-100"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
