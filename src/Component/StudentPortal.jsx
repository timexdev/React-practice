import React, { useState } from "react";

const StudentPortal = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [age, setage] = useState("");
  const [sex, setsex] = useState("");
  const [allstudent, setallstudent] = useState([]);

  const submit = () => {
    console.log(firstname, lastname, age, sex);

    let student = { firstname, lastname, age, sex };
    setallstudent([...allstudent, student]);
    setfirstname("");
    setlastname("");
    setage("");
    setsex("");
  };

  const deleteStudent = (userIndex) =>{
    let newAllStudent = [...allstudent];
    newAllStudent.splice(userIndex,1);
    setallstudent(newAllStudent)
  }
  return (
    <div className="container mt-5">
      <h3 className="text-center fw-bolder mb-3">STUDENT PORTAL</h3>
      <input
        type="text"
        placeholder="First Name"
        className="form-control mb-3"
        onChange={(e) => setfirstname(e.target.value)}
        value={firstname}
      />
      <input
        type="text"
        placeholder="Last Name"
        className="form-control mb-3"
        onChange={(e) => setlastname(e.target.value)}
        value={lastname}
      />
      <input
        type="number"
        placeholder="Age"
        className="form-control mb-3"
        onChange={(e) => setage(e.target.value)}
        value={age}
      />
      <input
        type="text"
        placeholder="Sex"
        className="form-control mb-3"
        onChange={(e) => setsex(e.target.value)}
        value={sex}
      />
      <button className="w-100 btn btn-success my-4" onClick={submit}>Submit</button>

      <hr />

      <h3 className="text-center fw-bolder mt-5 mb-3">LIST OF STUDENTS</h3>
      {allstudent.length == 0? <h3 className="text-center">There is no student</h3>:
      <table className="table table-striped">
        <thead>
        <tr>
          <th>S/N</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Action</th>
        </tr>
        </thead>
<tbody>
        {allstudent.map((eachstudent, index) => (
            <tr key={index}>
            <td>{index + 1}</td>
            <td>{eachstudent.firstname}</td>
            <td>{eachstudent.lastname}</td>
            <td>{eachstudent.age}</td>
            <td>{eachstudent.sex}</td>
            <td>
                <button  className="btn btn-warning mx-3">Edit</button>
                <button onClick={() => deleteStudent(index)} className="btn btn-danger">Delete</button>
            </td>
            </tr>
          

        // //   {/* <p>{eachstudent.firstname}</p>
        //         <p>{eachstudent.lastname}</p>
        //         <p>{eachstudent.age}</p>
        //         <p>{eachstudent.sex}</p> */}
      ))}
      </tbody>
      </table>
      }
    </div>
  );
};

export default StudentPortal;
