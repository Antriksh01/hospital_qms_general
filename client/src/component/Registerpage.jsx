import React, { useState } from "react";

// import Header from "../Header";
// import { useNavigate } from "react-router-dom";

const Registerpage = () => {
  //   const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
    cpassword: "",
    role: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Perform form validation here
    // if (data.password !== data.cpassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    // Perform registration logic or API call here
    //     console.log(data);
    //     alert("Sign up successful");
    //     navigate("/Login");
  };

  return (
    <>
      {/* <Header />*/}
      <h1 id="adm1">Sign up</h1>
      <form className="form" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={data.username}
          style={{ border: "none" }}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Mobile No"
          name="mobile"
          value={data.mobile}
          style={{ border: "none" }}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Email Id"
          name="email"
          value={data.email}
          style={{ border: "none" }}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          value={data.password}
          style={{ border: "none" }}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="password"
          name="cpassword"
          value={data.cpassword}
          placeholder="Confirm Password"
          style={{ border: "none" }}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        {/* <input
          type="text"
          name="role"
          value={data.role}
          placeholder="Designation"
          style={{ border: "none" }}
          onChange={handleChange}
          required
        /> */}
        <br />
        <br />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Registerpage;
