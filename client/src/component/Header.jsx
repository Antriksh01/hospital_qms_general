import React from 'react'
import jbplogo from './jbplogo.png';
import styled from 'styled-components';

function Header() {
  return (
    <> 
         
    <Wrapper className="navbar">
    <div className="logo">
      <img src={jbplogo} alt="Logo" />
    </div>
  
    <div id="links" className="links">
     
      <h3>Hi Admin Name </h3>
      <h3>Employee Id</h3>
      <span Id="btu">
       <button >Logout</button>
      <button>Go to Home</button></span>
     
    </div>
  </Wrapper>


</>
  
  )
}

export default Header;
const Wrapper = styled.div`

   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   box-sizing: border-box;
   /* flex-wrap: wrap; */

   .logo {
   object-fit:cover;
    
   
   }
   @media (max-width: 768px) {
   img{
    max-width: 100%;
     object-fit: cover;
    
  }
   
 }
 .title {
   font-size: 3rem;

 transition: font-size 0.3s ease-in-out;
   font-weight: bolder;
   color: rgba(34, 146, 58, 0.83);
   @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
    font-size: 40px;
    margin-left: 20px;
    
   }
 }
  .links h3{
   display: grid;
   gap: 1rem;
   font-size: x-large;
   transition: font-size 0.3s ease-in-out;
   font-weight: bold;
   padding-left: 70px;
   @media (max-width: 768px) {
    text-align: center;
    margin-top: 40px;
    
   }

   
 }
 #btu button{
  width: 8rem;
  padding: 0.8rem;
  margin: 10px;
  border-radius: 2rem;
  color: white;
  font-weight: bold;
  background-color:rgba(34, 146, 58, 0.83); 
  @media (max-width: 768px) {
  
    margin-top: 40px;
    margin: auto;
    margin-top: 30px;
    margin-right: 32px;
    display: flex;
    justify-content: center;

    
    
   }
   
 }
 
`;

