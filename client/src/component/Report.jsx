import React from 'react'
import styled from 'styled-components'
import Header from './Header'

function Report() {
  return (
   <>
   <Header/>
    <Wrapper className="container">
        <div className="nav">
        <button>Generate Patient Report</button>
            <br/>
            <br/>
            <button>Generate Doctors Report</button>
            <br/>
            <br/>
            <button>Generate Receptionist Report</button>
            <br/>
            <br/>
            <button>Generate Dispaly Report</button>
            <br/>
            <br />
            <button>Generate Tokens Report</button>
            <br/>
            <br/>
            <button>Generate Un-attendant Patient Report</button>
           
        </div>
        <div className="center">
        <button>Select Duration</button>
            <br/>
            <br/>
            <button>Select Duration</button>
            <br/>
            <br/>
            <button>Select Duration</button>
            <br/>
            <br />
            <button>Select Duration</button>
            <br/>
            <br/>
            <button>Select Duration</button>
             <br/>
            <br/>
            <button>Select Duration</button>
            </div>
                <div className="back">
                <button>Generate Report</button>
                  
                </div>
            
        </Wrapper>
   
   
   
   </>
  )
}

export default Report
const Wrapper = styled.div`
    
    display: flex;
    justify-content: space-between;
.nav  button{
 text-align: center;
 padding: 10px;
 margin: 10px;
 width: 50%;
border-radius: 30px;
font-size: large;
color:white;
background-color: rgb(79, 158, 79);
height: 3rem;


}
.center button { 
  padding: 10px;
  margin: 12px;
  width: 100%;
  height: 5rem;
  /* text-align: left; */
 font-size: large;
 color:black;
 margin-right: 2rem;
 

}
 .nav button {
  margin-bottom: 20px;
  
}

 
  

.back button{
  text-align: center;
   /* margin-top: 300px; */
   padding: 12px;
   border-radius: 20px;
   margin-right: 20px;
   color:white;
   background-color: rgb(79, 158, 79);
   font-size: large; 

}
.center{
    margin-right:20rem;

}



`

