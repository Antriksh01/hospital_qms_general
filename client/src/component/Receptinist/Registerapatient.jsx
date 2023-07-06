import React from 'react'
import styled from 'styled-components'
import Header from '../Header'





const Registerapatient = () => {


  return (
    
    
    <>

    <div>
      <Header/>
    <Wrapper className="conatiner">
    <div className='title'><span>Register a patient</span></div>

      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 ">
        <div className="form1">
     
     <input type="text" placeholder="Patient Name" style={{ border: "none" }} />
     <br />
     <br />
     <input type="text" placeholder="Moblie No" style={{ border: "none" }} />
     <br />
     <br />
     
     <input type="text" placeholder="Country" style={{ border: "none" }} />
     <br />
     <br />
     
     <input type="text" placeholder="State" style={{ border: "none" }} />
     <br />
     <br />
     
     <input type="text" placeholder="City" style={{ border: "none" }} />
     <br />
     <br />
     
     <input type="text" placeholder="Address" style={{ border: "none" }} />
     <br />
     <br />
      <input type="text" placeholder="Email-ID" style={{ border: "none" }} />
      <br />
     <br />
      
  </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
        <div className="form2">
     
     <input type="text" placeholder="DOB" style={{ border: "none" }} />
     <br />
     <br />
     
     <input type="text" placeholder="Age(Auto Calculated)" style={{ border: "none" }} />
     <br />
     <br />
     
     <input type="text" placeholder="Blood Group" style={{ border: "none" }} />
     <br />
      <br />
     
     <input type="text" placeholder="Marital Status" style={{ border: "none" }} />
     <br />
      <br />
     
     <input type="text" placeholder="Due Amount" style={{ border: "none" }} />
     
     <br />
      <br />
   
    
  </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
           <div className="form3">
    
     <input type="text" placeholder="Adhar NO/Any ID prrof" style={{ border: "none" }} />
     <br />
      <br />
     
     <input type="text" placeholder="Department Assigned" style={{ border: "none" }} />
     <br />
      <br />
     
     <input type="text" placeholder="Doctor NAme" style={{ border: "none" }} />
     <br />
      <br />
     
     <input type="text" placeholder="Payment Mode. Cash/Online/QR/UPI" style={{ border: "none" }} />
     
     <br />
      <br />
     <input type="text" placeholder="Fees" style={{ border: "none"}} />
     
     <br />
      <br />
      
      
      
   
  </div>
        </div>
      </div>
      <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">

            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="note">
              <label htmlFor=""></label>
            <textarea name="" id="note" cols="115" rows="6">Additional Notes</textarea>
            </div>
            </div>
      </div>
      
      
     
     
    
  </Wrapper>
   
   </div>
       <Button className="fotter">
        Register and Generate Token
    </Button>
    
      
    
    
    </>
  )
}

export default Registerapatient;

const Wrapper = styled.div`

     
    margin: 15px;
  


    .title {
   font-size: 3rem;
 transition: font-size 0.3s ease-in-out;
   font-weight: bolder;
   text-align: center;
   margin-bottom: 35px;
   color: rgba(34, 146, 58, 0.83);
   @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
    font-size: 36px;
    
    
   }
  }
    

    .form1 input {
    background-color: rgb(179, 255, 179);
    font-size: larger;
    width: 100%;
    height: 40px;
    padding-left: 12px;
  }
  .form2 input {
    background-color: rgb(179, 255, 179);
    font-size: larger;
    width: 100%;
    height: 40px;
    padding-left: 12px;

  }
  .form3 input {
    background-color: rgb(179, 255, 179);
    font-size: larger;
    width: 100%;
    height: 40px;
    padding-left: 12px;

    
  }
  
  textarea{
    background-color:rgb(179, 255, 179);
    margin-bottom: 12px;
    margin-top: -9.5rem;
    border: none;
    font-size: larger;
    padding-left: 12px;
    margin-right: 12px;
    width: 870px;
    
    @media (min-width: 1380px) {
      margin-top: -9.5rem;
      width: 100%
    
    
    }
    @media (max-width: 768px) {
     margin: 1px;
      width: 100%;
      
    
    }
   
    
}

  `;
  const Button = styled.button`
     float: right;
    color: white;
    border-radius: 25px;
    background-color: rgb(79, 158, 79);
    padding: 12px;
    width: 300px;
    margin: 15px;
    @media (max-width: 768px) {
     margin: auto;
      width: 100%;
      
    
    
    }
    
  `;


