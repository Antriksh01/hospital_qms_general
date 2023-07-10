import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthContext";

const Login = (props) => {
  const { formData, updateFormData } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.username) {
      validationErrors.username = "Username is required";
    }
    if (!formData.password) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "Password must be at least 6 characters long";
    }
    updateFormData("");
    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Send login request to the backend
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          formData
        );

        if (response.status === 200) {
          // Authentication successful
          console.log("Login successful");

          // Store the token and auth data in local storage
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("auth", JSON.stringify(response.data.result[0]));

          // Reset the form
          updateFormData({ username: "", password: "" });
          setErrors({});
        } else {
          // Authentication failed
          const errorData = response.data;
          setErrors(errorData.errors);
        }
        alert("Login successful");
      } catch (error) {
        console.log("Login error:", error);
      }
    } else {
      // Form data is invalid, update the errors state
      setErrors(validationErrors);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  // Rest of the code remains the same
  // ...
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="row h-100 d-flex justify-content-center align-items-center">
        <div className="col-sm-9 col-md-4 border border-1 border-dark-subtle px-4 py-4 rounded-4">
          <h2 className="text-center mb-3">{props.title}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">Name:</label>
              <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
              {errors.username && (
                <span className="text-danger">{errors.username}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            <div className="row mt-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                  />
                  <label className="form-check-label" htmlFor="form2Example31">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="col">
                <a href="#!" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-4 mb-4">
              Submit
            </button>
            <div className="text-center">
              <p>
                Not a member?{" "}
                <a onClick={() => navigate("/signup")}>Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

// const Login = (props) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const validationErrors = {};

//     if (!formData.username) {
//       validationErrors.username = "Username is required";
//     }
//     if (!formData.password) {
//       validationErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       validationErrors.password = "Password must be at least 6 characters long";
//     }

//     return validationErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         // Send login request to the backend
//         const response = await axios.post(
//           "http://localhost:5000/api/auth/login",
//           formData
//         );
//         console.log(response.data.result[0]);
//         const dt = response.data.result[0];
//         console.log(dt);
//         if (response.status === 200) {
//           // Authentication successful
//           console.log("Login successful");

//           // Store the token in local storage
//           localStorage.setItem("token", response.data.token);
//           localStorage.setItem("auth", JSON.stringify(response.data.result[0]));

//           // Set the token in the Authorization header for subsequent requests
//           axios.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${response.data.token}`;

//           // Reset the form
//           setFormData({ username: "", password: "" });
//           setErrors({});
//         } else {
//           // Authentication failed
//           const errorData = response.data;
//           setErrors(errorData.errors);
//         }
//         alert("Login successful");
//       } catch (error) {
//         console.log("Login error:", error);
//       }
//     } else {
//       // Form data is invalid, update the errors state
//       setErrors(validationErrors);
//     }
//   };
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     }
//   }, []);
//   return (
//     <div className="container" style={{ height: "100vh" }}>
//       <div className="row h-100 d-flex justify-content-center align-items-center">
//         <div className="col-sm-9 col-md-4 border border-1 border-dark-subtle px-4 py-4 rounded-4">
//           <h2 className="text-center mb-3">{props.title}</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name">Name:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleInputChange}
//               />
//               {errors.username && (
//                 <span className="text-danger">{errors.username}</span>
//               )}
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password">Password:</label>
//               <input
//                 className="form-control"
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//               {errors.password && (
//                 <span className="text-danger">{errors.password}</span>
//               )}
//             </div>
//             <div className="row mt-4">
//               <div className="col d-flex justify-content-center">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="form2Example31"
//                     checked
//                   />
//                   <label className="form-check-label" htmlFor="form2Example31">
//                     Remember me
//                   </label>
//                 </div>
//               </div>
//               <div className="col">
//                 <a href="#!" className="text-decoration-none">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>
//             <button type="submit" className="btn btn-primary w-100 mt-4 mb-4">
//               Submit
//             </button>
//             <div className="text-center">
//               <p>
//                 Not a member?{" "}
//                 <a onClick={() => navigate("/signup")}>Register</a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

// const Login = (props) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const validateForm = () => {
//     const validationErrors = {};

//     if (!formData.username) {
//       validationErrors.username = "Username is required";
//     }
//     if (!formData.password) {
//       validationErrors.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       validationErrors.password = "Password must be at least 6 characters long";
//     }

//     return validationErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validateForm();

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         // Send login request to the backend
//         const response = await axios.post(
//           "http://localhost:5000/api/auth/login",
//           formData
//         );
//         console.log(response.data.result[0]);
//         const dt = response.data.result[0];
//         console.log(dt);
//         if (response.status === 200) {
//           // Authentication successful
//           console.log("Login successful");

//           // Store the token in local storage
//           localStorage.setItem("token", response.data.token);
//           localStorage.setItem("auth", JSON.stringify(response.data.result[0]));

//           // Set the token in the Authorization header for subsequent requests
//           axios.defaults.headers.common[
//             "Authorization"
//           ] = `Bearer ${response.data.token}`;

//           // Reset the form
//           setFormData({ username: "", password: "" });
//           setErrors({});
//         } else {
//           // Authentication failed
//           const errorData = response.data;
//           setErrors(errorData.errors);
//         }
//         alert("Login successful");
//       } catch (error) {
//         console.log("Login error:", error);
//       }
//     } else {
//       // Form data is invalid, update the errors state
//       setErrors(validationErrors);
//     }
//   };
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     }
//   }, []);
//   return (
//     <div className="container" style={{ height: "100vh" }}>
//       <div className="row h-100 d-flex justify-content-center align-items-center">
//         <div className="col-sm-9 col-md-4 border border-1 border-dark-subtle px-4 py-4 rounded-4">
//           <h2 className="text-center mb-3">{props.title}</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name">Name:</label>
//               <input
//                 className="form-control"
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleInputChange}
//               />
//               {errors.username && (
//                 <span className="text-danger">{errors.username}</span>
//               )}
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password">Password:</label>
//               <input
//                 className="form-control"
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//               {errors.password && (
//                 <span className="text-danger">{errors.password}</span>
//               )}
//             </div>
//             <div className="row mt-4">
//               <div className="col d-flex justify-content-center">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     value=""
//                     id="form2Example31"
//                     checked
//                   />
//                   <label className="form-check-label" htmlFor="form2Example31">
//                     Remember me
//                   </label>
//                 </div>
//               </div>
//               <div className="col">
//                 <a href="#!" className="text-decoration-none">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>
//             <button type="submit" className="btn btn-primary w-100 mt-4 mb-4">
//               Submit
//             </button>
//             <div className="text-center">
//               <p>
//                 Not a member?{" "}
//                 <a onClick={() => navigate("/signup")}>Register</a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
