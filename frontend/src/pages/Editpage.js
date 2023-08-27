import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Editpage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    empnumber: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line
  }, []);

  const getEmployees = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`http://localhost:3456/employees/${id}`);
      setEmployee({
        name: response.data.name,
        empnumber: response.data.empnumber,
        email: response.data.email,
        role: response.data.role,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const updateEmployee = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await axios.put(`http://localhost:3456/employees/${id}`, employee);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={updateEmployee}>
        <div>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
              placeholder="Enter your name"
            ></input>
          </div>
          <div>
            <label>Employee number</label>
            <input
              type="text"
              value={employee.empnumber}
              onChange={(e) =>
                setEmployee({ ...employee, empnumber: e.target.value })
              }
              placeholder="Enter your employee number"
            ></input>
          </div>
          <div>
            <label>Role</label>
            <input
              type="text"
              value={employee.role}
              onChange={(e) =>
                setEmployee({ ...employee, role: e.target.value })
              }
              placeholder="Enter your role"
            ></input>
          </div>
          <div>
            <label>Mail id</label>
            <input
              type="text"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
              placeholder="Enter your mail"
            ></input>
          </div>
          <div>{!isLoading && <button>update</button>}</div>
        </div>
      </form>
    </div>
  );
}

export default Editpage;
