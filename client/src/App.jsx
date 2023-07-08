import React from "react";
import Login from "./component/Login.jsx";
import Signup from "./component/Signup.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Admindashboard from "./component/Admindashboard.jsx";
import { AuthProvider } from "./component/AuthContext.jsx";
import DoctorTreatment from "./component/DoctorTreatment.jsx";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login title={"Doctor Login"} />}></Route>
            <Route
              path="/admin"
              element={<Login title={"Admin Login"} />}
            ></Route>
            <Route
              path="/rescpt"
              element={<Login title={"Resiptionist Login"} />}
            ></Route>
            <Route
              path="/DoctorTreatment"
              element={<DoctorTreatment />}
            ></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
