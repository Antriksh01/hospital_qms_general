import React from 'react'
import styled from "styled-components"
import Header from '../Header'
const DisplayContent = () => {
    return (
      <div>
        <Header/>
        <div>
        <div className="text-center" id="heading">
          <h1 className="fw-bold mt-4" style={{ color: "#347571" }}>
            Display Content
          </h1>
        </div>
        <TableParent className="mt-5">
         <TableContainer className=''>
         <div className="row mt-3 mx-3" style={{}}>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#b8e28a" }}>
                <h3>Token No</h3>
              </div>
            </div>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#b8e28a" }}>
                <h3>Department</h3>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#b8e28a" }}>
                <h3>Doctor Name</h3>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#b8e28a" }}>
                <h3>Room No</h3>
              </div>
            </div>
            <div className="col-2">
              <div className="py-2" style={{ backgroundColor: "#b8e28a" }}>
                <h3>Time of Appointment</h3>
              </div>
            </div>
          </div>
          <div className="row mt-3 mx-3" style={{}}>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>Orth_010123_01</h5>
              </div>
            </div>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>ANESTHESIOLOGY</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>Doctor Name</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>01</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>11:00</h5>
              </div>
            </div>
          </div>
          <div className="row mt-3 mx-3" style={{}}>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>Orth_010123_02</h5>
              </div>
            </div>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>CRITICAL CARE</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>Doctor Name</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>02</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>11:20</h5>
              </div>
            </div>
          </div>
          <div className="row mt-3 mx-3" style={{}}>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>Orth_010123_02</h5>
              </div>
            </div>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>OBSTETRICS & GYNAECOLOGY</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>Doctor Name</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>03</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>11:40</h5>
              </div>
            </div>
          </div>
          <div className="row mt-3 mx-3" style={{}}>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>Orth_010123_02</h5>
              </div>
            </div>
            <div className="col-3">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>DENTAL_SURGERY</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>Doctor Name</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
               <h5> 04</h5>
              </div>
            </div>
            <div className="col-2">
              <div className="py-4" style={{ backgroundColor: "#ecf8e5" }}>
                <h5>12:00</h5>
              </div>
            </div>
          </div>
         </TableContainer>
        </TableParent>
        
      </div>
      </div>
    )
  }
  
  export default DisplayContent
  const TableParent = styled.div`
  @media screen and (max-width: 767px){
    overflow-x: auto !important;
    max-width: 1000px;
  }
  `;
  
  const TableContainer = styled.div`
  @media screen and (max-width: 767px){
    width: 1200px;
  }
  h3,h5{
    text-align: center;
  }
  `;