import React from 'react'
import styled from 'styled-components'

function DispalyContent() {
  return (
    <> 
   <Wrapper className="container">

<div className="nav">
    <h5>Doctor Name : Doctor_Name</h5>
    
    <h5>Degree: MD</h5>
    
    <h5>Department. : Dept_1</h5>
    
    <h5>Room No. :</h5>
</div>
<div className="table-responsive">
<table id='table' className='table'>
<tr>
  <th>Token No</th>
  <th>Department</th>
  <th>Time of
    <br /> Appointment</th>
</tr>
<tr>
  <td>Row 1, Cell 1</td>
  <td>Row 1, Cell 2</td>
  <td>Row 1, Cell 3</td>
</tr>
<tr>
  <td>Row 2, Cell 1</td>
  <td>Row 2, Cell 2</td>
  <td>Row 2, Cell 3</td>
</tr>
<tr>
  <td>Row 3, Cell 1</td>
  <td>Row 3, Cell 2</td>
  <td>Row 3, Cell 3</td>
</tr>
<tr>
  <td>Row 4, Cell 1</td>
  <td>Row 4, Cell 2</td>
  <td>Row 4, Cell 3</td>
</tr>

</table>
 
 
</div>

</Wrapper>
   </>
  )
}

export default DispalyContent

const Wrapper = styled.div`
    

    
    display: flex;
    justify-content: center;
    
    

 .nav{
    background-color:  rgba(155, 245, 175, 0.83);
     width: 30%;
   
     
     margin: 18px;
    
    
 }
 
 .table-responsive {
  
   margin-right: 40%;

   
 }
 .table {
   /* width: 220%; */
   border-collapse:collapse;
   
 }
 #table th,
  #table td {
    border: 1rem solid white;
    padding: 1.6rem;
    text-align: center;
  
  }
  #table th {
   background-color:  rgba(34, 146, 58, 0.83);
 }
 #table td{
   background-color: rgba(13, 212, 56, 0.83);
 
 }
 
 h5{
font-size: large;
margin-top: 50px;
 }
 

 
`