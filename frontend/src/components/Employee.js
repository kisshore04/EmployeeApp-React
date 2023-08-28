// import axios from "axios";
// import React from "react";
// import { Link } from "react-router-dom";


// function Employee({ employee, getEmployees, key }) {


//   const deleteEmployee = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3456/employees/${id}`);
//       getEmployees();
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   return (
//     <div key={key}>
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <h1 style={{ padding: "10px" }}> {employee.name}</h1>
//         <h2 style={{ padding: "10px" }}> {employee.empnumber}</h2>
//         <h4 style={{ padding: "10px" }}>{employee.role}</h4>
//         <h3 style={{ padding: "10px" }}>{employee.email}</h3>

//         <Link to={`/edit/${employee._id}`} style={{ textDecoration: "none" }}>
//           <h2>Edit</h2>
//         </Link>
//         <button
//           onClick={() => {
//             deleteEmployee(employee._id);
//           }}
//         >
//           delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Employee;

//Card - styled

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./../styles/EmployeeCard.css"; // Import your custom styles

function Employee({ employee, getEmployees, key }) {
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:3456/employees/${id}`);
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="employee-card" key={key}>
      <div className="card-header">

      </div>
      <div className="card-content">
        <p><b>Employee Name :</b> {employee.name}</p>
        <p><b>Employee Number : </b> {employee.empnumber}</p>
        <p> <b>Role :</b> {employee.role}</p>
        <p> <b>Email :</b> {employee.email}</p>
      </div>
      <button className="delete-button" onClick={() => deleteEmployee(employee._id)}>
        Delete
      </button>
      <Link to={`/edit/${employee._id}`}>
        <button className="edit-button">
          Edit
        </button>
      </Link>

    </div>
  );
}

export default Employee;


//With style added.

// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";

// const EmployeeCard = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px;
//   border: 1px solid #ccc;
//   margin: 10px;
//   background-color: #f7f7f7;
// `;

// const EmployeeDetails = styled.div``;

// const EditLink = styled(Link)`
//   text-decoration: none;
//   margin-right: 10px;
// `;

// function Employee({ employee, getEmployees }) {
//   const deleteEmployee = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3456/employees/${id}`);
//       getEmployees();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <EmployeeCard>
//       <EmployeeDetails>
//         <h1>{employee.name}</h1>
//         <h2>{employee.empnumber}</h2>
//         <h4>{employee.role}</h4>
//         <h3>{employee.email}</h3>
//       </EmployeeDetails>
//       <div>
//         <EditLink to={`/edit/${employee._id}`}>Edit</EditLink>
//         <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
//       </div>
//     </EmployeeCard>
//   );
// }

// export default Employee;


