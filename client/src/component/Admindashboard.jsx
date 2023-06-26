import React from 'react'
import styled from 'styled-components'
import Header from './Header';

function Admindashboard() {
  return (
    <>
    <Header/>
    <Heading className="title">
        <span>Admin Dashboard</span>
      </Heading>
      <Wrapper className="container">
        <div></div>

        <div className="hamburgers">
          <div>
            <button className="buttons">Manage Doctors</button>
          </div>
          <div>
            <button className="buttons">Manage Receptionist</button>
          </div>
          <div>
            <button className="buttons">Manage Departmants</button>
          </div>
          <div>
            <button className="buttons">Manage Counters</button>
          </div>
        </div>
        <div id="cardcan" className="cardcan">
          <div className="row">
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Doctors</h4>
                <h4>15</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center ">
                <h4>Departments</h4>
                <h4>8</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Patient Today</h4>
                <h4>65</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card d-flex justify-content-center align-items-center">
                <h4>Receptionist Concerns</h4>
                <h4>5</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Served</h4>
                <h4>5</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Unattended</h4>
                <h4>5</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Cancelled OPD</h4>
                <h4>5</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Display Concerms</h4>
                <h4>5</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Reports</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Display Content</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Token Format</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Monitor Doctors Logs</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card  d-flex justify-content-center align-items-center">
                <h4>Monitor Receptionist Logs</h4>
              </div>
            </div>
            
          </div>

          {/* <div className="card">
        <h4>Card 3</h4>
        
      </div> */}
        </div>
      </Wrapper>
    </>
  );
}

export default Admindashboard
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -20px;
  margin-left: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    /* flex-wrap: wrap; */
  }

 

  .card {
    width: 200px;
    height: 150px;
    margin: 10px;
    background-color: rgba(129, 243, 153, 0.83);
    border-radius: 40px;
    padding: 16px;
    box-sizing: border-box;
    margin-left: 90px;
    text-align: center;

    @media (max-width: 768px) {
    
      transition: font-size 0.3s ease-in-out;
      width: 90%;
      margin: 12px;
    }
  }

  .buttons {
    background-color: rgba(32, 143, 56, 0.83);
    box-sizing: border-box;
    width: 200px;
    height: 45px;
    border-radius: 20px;
    margin-top: 55px;
    font-size: large;
    color: white;
    margin: 30px;
    border: none;
  }

  .hamburgers {
    background-color: rgb(179, 255, 179);
    margin-top: 10px;
    margin-right: 2rem;
    height: 52rem;

    @media (max-width: 768px) {
      width: 100%;
      height: 30rem;
      
    }
  }
`;
const Heading = styled.div`
  font-size: 3rem;

  transition: font-size 0.3s ease-in-out;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 35px;
  color: rgba(34, 146, 58, 0.83);
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
    font-size: 35px;
  }
`;

    
    
    

