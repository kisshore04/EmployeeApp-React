import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Employee({ employee, getEmployee, key }) {
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:3456/employees/${id}`);
      getEmployee();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div key={key}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ padding: "10px" }}> {employee.name}</h1>
        <h2 style={{ padding: "10px" }}> {employee.empnumber}</h2>
        <h4 style={{ padding: "10px" }}>{employee.role}</h4>
        <h3 style={{ padding: "10px" }}>{employee.email}</h3>

        <Link to={`/edit/${employee._id}`} style={{ textDecoration: "none" }}>
          <h2>Edit</h2>
        </Link>
        <button
          onClick={() => {
            deleteEmployee(employee._id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default Employee;
