import { useState } from "react";
import React from "react";

const State = () => {
  // let myNumber = 1
  // const increase = ()=>{
  //     myNumber = myNumber + 1;
  //     console.log(myNumber)
  //     document.getElementById("displayVal").innerHTML = myNumber;
  // }

  //   function for number increament
  const [myNumber, setMyNumber] = useState(1);
  const increase = () => {
    setMyNumber(myNumber + 1);
    console.log(myNumber);
  };

  // function for input in react
  const [firstname, setfirstname] = useState("");
  const [lasttname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const register = () => {
    console.log(firstname, lasttname, email, password);
  };

  return (
    <>
      <h1 className="text-center">PARCTICING EVENT AND USE STATE HOOK</h1>
      {/* <h3 id='displayVal'>{myNumber}</h3> */}
      <h3 className="text-center">{myNumber}</h3>
      <button style={{marginLeft:"650px"}} onClick={increase}>Increase</button>
      <hr />


      {/* INPUT IN REACT */}
      <div className="container">
        <h3 className="text-center">Registration Form</h3>
        <input
          type="text"
          placeholder="First Name"
          className="form-control"
          onChange={(e) => setfirstname(e.target.value)}
        /> <br />
        <input
          type="text"
          placeholder="Last Name"
          className="form-control"
          onChange={(e) => setlastname(e.target.value)}
        /> <br />
        <input
          type="email"
          placeholder="Email"
          className="form-control"
          onChange={(e) => setemail(e.target.value)}
        /> <br />
        <input
          type="password"
          placeholder="Password"
          className="form-control"
          onChange={(e) => setpassword(e.target.value)}
        /> <br />
        <button className="btn btn-success" onClick={register}>
          Register
        </button>
      </div>
    </>
  );
};

export default State;
