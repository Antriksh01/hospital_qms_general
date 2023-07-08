import React from "react";
import jbplogoremove from "../assets/images/jbplogoremove.png";
import jbpHospital from "../assets/images/jbpHospital.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Frontpage = () => {
  return (
    <>
      <Container>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <div className="logo">
              <img src={jbplogoremove} alt="" />
            </div>
            <div>
              <div class="navbar-nav ms-auto mb-2 mb-lg-0">
                <h3 className="text-center">
                  Welcome to Jabalpur Hospital And Research Center Queue
                  Management Application
                </h3>
              </div>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
              <div className="image">
                <img src={jbpHospital} alt="" />
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="login pt-md-0 pt-4">
                <h1>Login As</h1>
                <div className="btu">
                  <button>
                    <Link
                      to="/admin-login"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Admin
                    </Link>
                  </button>
                  <button>
                    <Link
                      to="/doctor-login"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Doctor
                    </Link>
                  </button>
                  <button>
                    <Link
                      to="/receptionist-login"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Receptionist
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Frontpage;
const Container = styled.header`
  .logo img {
    @media screen and (max-width: 768px) {
      width: 21rem;

    }
  }

  nav {
    background: #bbd2c5;
    background: -webkit-linear-gradient(to right, #536976, #bbd2c5);
    background: linear-gradient(to right, #ebeff1, #fff, #bbebd0);
    box-shadow: 0px 2px 7px #e0e0e0;
    @media screen and (max-width: 768px) {
      width: 93%;
    margin-left: 1rem;
    margin-top: 2rem;

}
    }
  

  .image img {
    height: 27rem;
    margin-top: 3rem;
    margin-left: -6rem;
    width: 121%;

    @media screen and (max-width: 768px) {
      height: 100%;
       width: 100%;
      margin: 0rem;
      margin-top: 3rem;
    }
  }

  h3 {
    color: #347571;
    padding-top: 2rem;
    font-size: xx-large;

    @media screen and (max-width: 768px) {
      margin-left: -1rem;
    }
  }
  .login {
    margin-top: 3rem;
    width: 23rem;
    margin-left: 8rem;
    height: 27rem;
    box-shadow: 10px 10px 5px #dedfdf;
    @media  screen and (max-width: 768px) {
      margin-left: 5px;
      margin-top: 2rem;
      height: 29rem;
    }
  }

  .btu {
    display: grid;
    gap: 5px;
    width: 23rem;
    padding: 10px;
    :hover {
      background-color: #ccb9b9;
      color: white;
    }
  }
  .btu button {
    padding: 12px;
    border-radius: 20rem;
    margin: 2rem;
    border: none;
    transition: font-size 0.3s ease-in-out;
    font-weight: bolder;
  }

  h1 {
    text-align: center;
    margin-top: 1rem;
    padding-top: 1rem;
  }
`;
