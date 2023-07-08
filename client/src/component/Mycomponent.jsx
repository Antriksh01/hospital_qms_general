import { useState, useEffect } from "react";
import axios from "axios";

const  MyComponent = () => {
  const [myData, setMyData] = useState([]);

  // using Promises
  useEffect(() => {
    axios
      .get("http://localhost:4500/api/join")
      .then((response) => setMyData(response.data))
  }, []);

//plz subscribe to thapa technical
  return (
    <>
      <h1>Jabalpur Hospital</h1>

      <div className="grid">
        {myData.map((post) => {
          const { Token, DoctorName, RoomNo, Time } = post;
          return (
            <div className="card">
              <h2>{DoctorName}</h2>            
              <h2>{RoomNo}</h2>
              <p>{Time}</p>
              <p>{Token}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyComponent;
















// import React from 'react';
// import { useEffect } from 'react';
// import axios from 'axios';

// function MyComponent() {
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4500/api/join');
//       // Handle the response data
//       console.log(response.data);
//     } catch (error) {
//       // Handle the error
//       console.error(error);
//     }
//   };

//   return 
// }
// export default MyComponent;