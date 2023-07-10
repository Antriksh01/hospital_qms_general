import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Reports = () => {
  const { formData } = useContext(AuthContext);
  const { username, email } = formData;
  console.log(formData, "1");
  return (
    <div>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <Header />
      <div className="mb-4">
        <h1 className="text-center" style={{ color: "#5ec57e" }}>
          Reports
        </h1>
      </div>
      <div className="container-lg">
        <div className="row mt-5">
          <div className="col-lg-8 px-lg-0 px-4">
            <div className="row mb-md-5 mb-2">
              <div className="col-lg-7 px-0 ">
                <StyledButton className="text-nowrap w-100">
                  Generate Patient Report
                </StyledButton>
              </div>
              <div className="col-lg-4 col mt-3 mt-md-0 px-lg-4 px-0">
                <div
                  className="text-nowrap text-center py-2 rounded-3 fw-semibold"
                  style={{ fontSize: "18px", backgroundColor: "#dcf4ce" }}
                >
                  Select Duration
                </div>
              </div>
            </div>
            <div className="row mb-md-5 mb-2">
              <div className="col-lg-7 px-0 ">
                <StyledButton className="text-nowrap w-100">
                  Generate Patient Report
                </StyledButton>
              </div>
              <div className="col-lg-4 col mt-3 mt-md-0 px-lg-4 px-0">
                <div
                  className="text-nowrap text-center py-2 rounded-3 fw-semibold"
                  style={{ fontSize: "18px", backgroundColor: "#dcf4ce" }}
                >
                  Select Duration
                </div>
              </div>
            </div>
            <div className="row mb-md-5 mb-2">
              <div className="col-lg-7 px-0 ">
                <StyledButton className="text-nowrap w-100">
                  Generate Patient Report
                </StyledButton>
              </div>
              <div className="col-lg-4 col mt-3 mt-md-0 px-lg-4 px-0">
                <div
                  className="text-nowrap text-center py-2 rounded-3 fw-semibold"
                  style={{ fontSize: "18px", backgroundColor: "#dcf4ce" }}
                >
                  Select Duration
                </div>
              </div>
            </div>
            <div className="row mb-md-5 mb-2">
              <div className="col-lg-7 px-0">
                <StyledButton className="text-nowrap w-100">
                  Generate Patient Report
                </StyledButton>
              </div>
              <div className="col-lg-4 col mt-3 mt-md-0 px-lg-4 px-0">
                <div
                  className="text-nowrap text-center py-2 rounded-3 fw-semibold"
                  style={{ fontSize: "18px", backgroundColor: "#dcf4ce" }}
                >
                  Select Duration
                </div>
              </div>
            </div>
            <div className="row mb-md-5 mb-2">
              <div className="col-lg-7 px-0 ">
                <StyledButton className="text-nowrap w-100">
                  Generate Patient Report
                </StyledButton>
              </div>
              <div className="col-lg-4 col mt-3 mt-md-0 px-lg-4 px-0">
                <div
                  className="text-nowrap text-center py-2 rounded-3 fw-semibold"
                  style={{ fontSize: "18px", backgroundColor: "#dcf4ce" }}
                >
                  Select Duration
                </div>
              </div>
            </div>
            <div className="row mb-md-5 mb-2">
              <div className="col-lg-7 px-0 col">
                <StyledButton className="text-nowrap w-100">
                  Generate Patient Report
                </StyledButton>
              </div>
              <div className="col-lg-4 col mt-3 mt-md-0 px-lg-4 px-0">
                <div
                  className="text-nowrap text-center py-2 rounded-3 fw-semibold"
                  style={{ fontSize: "18px", backgroundColor: "#dcf4ce" }}
                >
                  Select Duration
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <StyledDiv>
              <StyledButton className="text-nowrap fs-3 text-center rounded-pill mt-4 mt-lg-0">
                Generate Report
              </StyledButton>
            </StyledDiv>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reports;

const StyledButton = styled.button`
  padding: 7px 100px;
  border: 0px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background-color: #5ec57e;
`;
const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
