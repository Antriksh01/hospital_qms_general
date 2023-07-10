import React from "react";
import jbplogo from "./jbplogo.png";
import jbpHospital from "./jbpHospital.jpg";
import styled from "styled-components";

const Frontpage = () => {
  const { formData } = useContext(AuthContext);
  const { username, email } = formData;
  console.log(formData, "1");

  return (
    <>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <header className="header">
        <div className="row row-cols-1 row-cols-lg-2 ">
          <div className="logo">
            <img src={jbplogo} alt="" />
          </div>
          <div className="title">
            <h4>
              Welcom to Jabalpur Hospital And Research Center Queue Management
              Application
            </h4>
          </div>
        </div>
      </header>

      <Contain className="container">
        <div className="row row-cols-lg-2">
          <div className="image">
            <img src={jbpHospital} alt="" />
          </div>
          <div className="login">
            <h1>Login As</h1>
            <div className="btu">
              <button>Admin</button>
              <button>Doctor</button>
              <button>Receptionist</button>
            </div>
          </div>
        </div>
      </Contain>
    </>
  );
};
export default Frontpage;

const Contain = styled.div`
  .image img {
    height: 20rem;
    margin-top: 3rem;
    margin-left: -6rem;
  }

  .login {
    background-color: #ded9ee;
    margin-top: 3rem;
    width: 23rem;
    margin-left: 12rem;
    height: 27rem;
  }
  .btu {
    display: grid;
    gap: 5px;
    width: 23rem;
    padding: 20px;
  }
  .btu button {
    padding: 12px;
    border-radius: 20rem;
    margin: 2rem;
    color: black;
  }
  h1 {
    text-align: center;
    margin-top: 1rem;
  }
`;
