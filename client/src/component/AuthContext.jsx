import { createContext, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
  // Retrieve data from localStorage
  const token = localStorage.getItem("token");
  const authData = JSON.parse(localStorage.getItem("auth"));

  console.log(token); // Display the token value
  console.log(authData); // Display the parsed auth data

  // Initialize the form data state
  const [formData, setFormData] = useState({
    username: authData?.username || "",
    email: authData?.email || "",
  });

  // Update the form data values
  const updateFormData = (newFormData) => {
    setFormData(newFormData);
  };

  // Create the context value object
  const authContextValue = {
    formData,
    updateFormData,
  };

  // Provide the context value to the children components
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// import { createContext, useState } from "react";

// // Create the AuthContext
// export const AuthContext = createContext();

// // Create the AuthProvider component
// export const AuthProvider = ({ children }) => {
//   const [formData, setFormData] = useState({
//     username: authData.username,
//     email: authData.email,
//   });

//   // Update the form data values
//   const updateFormData = (newFormData) => {
//     setFormData(newFormData);
//   };

//   // Create the context value object
//   const authContextValue = {
//     formData,
//     updateFormData,
//   };
//   // Retrieve data from localStorage
//   const token = localStorage.getItem("token");
//   const authData = JSON.parse(localStorage.getItem("auth"));

//   console.log(token); // Display the token value
//   console.log(authData); // Display the parsed auth data

//   // Provide the context value to the children components
//   return (
//     <AuthContext.Provider value={authContextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

//================================================================

// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("auth")) || null
//   );

//   const login = (newToken, newUser) => {
//     setToken(newToken);
//     setUser(newUser);
//     localStorage.setItem("token", newToken);
//     localStorage.setItem("auth", JSON.stringify(newUser));
//   };

//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     localStorage.removeItem("token");
//     localStorage.removeItem("auth");
//   };

//   return (
//     <AuthContext.Provider value={{ token, user, login, logout }}>

//     </AuthContext.Provider>
//   );
// };
//================================================================
