import React from 'react'
import Headers from '../Header'
import styled from 'styled-components'

function Managedoctor() {
  return (
    
    <> 
    
    <div>
      <Headers/>
      <Heading className="title">
        <span>Manage Doctors</span>
      </Heading>
    <Responsive><table className="table my-5 ">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Working Day</th>
      <th scope="col">Off Day</th>
      <th scope="col">Additional Notes</th>
      <th scope="col">Actions</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Receptionist Name 1</td>
      <td>999999999</td>
      <td>Mon-Sat</td>
      <td>Sunday</td>
      <td>Available on Call 24 X 7</td>
      
      <td>Edit/Remove</td>
    </tr>
    <tr>
    <th scope="row">2</th>
      <td>Receptionist Name 2</td>
      <td>999999999</td>
      <td>Mon-Sat</td>
      <td>Sunday</td>
      <td>Available on Call 24 X 7</td>
    
      <td>Edit/Remove</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Receptionist Name 3</td>
      <td>999999999</td>
      <td>Mon-Sat</td>
      <td>Sunday</td>
      <td>Available on Call 24 X 7</td>
      <td>Edit/Remove</td>
    </tr>
  </tbody>
</table>
</Responsive>
   <Button className="btu">
     <button className='btu1'>
      Add a doctor</button> 
     
     <button className='btu2'>Go to Dashboard</button> 
 
   </Button>
    
    </div>
    
    
    </>
  )
}

export default Managedoctor

const Responsive = styled.div`
  overflow-x: auto;
    margin: 0.5rem;
    .table th,
  .table td {
    border: 1px solid black;
    padding: 2.5rem;
    text-align: center;
    
  }
`

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
const Button = styled.div`
  text-align  :center ;
  flex-wrap: wrap;
  
  
  .btu1{
    
    margin-bottom: 2rem; 
    padding: 13px;
    width: 12rem;
    border-radius: 2rem;
    background-color:  rgba(34, 146, 58, 0.83);
    
   font-weight: bold;
   color: white;
   
  @media (max-width: 768px) {
  
  margin-top: 40px;
  margin: auto;
  margin-top: 30px;
  margin-right: 32px;

  justify-content: center;
 }
  
  }
  .btu2{
    padding: 13px;
  
    width: 12rem;
    margin-left: 20rem;
    border-radius: 2rem;
    background-color:   rgba(34, 146, 58, 0.83);
    font-weight: bold;
   
  color: white;
 
  @media (max-width: 768px) {
  
  margin-top: 40px;
  margin: auto;
  margin-top: 30px;
  margin-right: 32px;
  justify-content: center;
  
 }

  }
 
`