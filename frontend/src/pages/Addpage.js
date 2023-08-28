// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Addpage() {
//   const [name, setName] = useState("");
//   const [empno, setEmpno] = useState("");
//   const [role, setRole] = useState("");
//   const [mail, setMail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const addEmployee = async (e) => {
//     e.preventDefault();
//     if (name === "" || empno === "" || role === "" || mail === "") {
//       alert("Please fill all the columns..");
//     }
//     try {
//       setIsLoading(true);
//       const response = await axios.post("http://localhost:3456/employees", {
//         name: name,
//         empnumber: empno,
//         email: mail,
//         role: role,
//       });
//       alert(`Employee: ${response.data.name} details added successfully`);
//       setIsLoading(false);
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//       setIsLoading(false);
//     }
//   };
//   return (
//     <div>
//       Addpage
//       <form action="POST" onSubmit={addEmployee}>
//         <div>
//           <div>
//             <label>Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your name"
//             ></input>
//           </div>
//           <div>
//             <label>Employee number</label>
//             <input
//               type="text"
//               value={empno}
//               onChange={(e) => setEmpno(e.target.value)}
//               placeholder="Enter your employee number"
//             ></input>
//           </div>
//           <div>
//             <label>Role</label>
//             <input
//               type="text"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               placeholder="Enter your role"
//             ></input>
//           </div>
//           <div>
//             <label>Mail id</label>
//             <input
//               type="text"
//               value={mail}
//               onChange={(e) => setMail(e.target.value)}
//               placeholder="Enter your mail"
//             ></input>
//           </div>
//           <div>{!isLoading && <button>Submit</button>}</div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Addpage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './../styles/Addpage.css'; // Import your custom styles

function Addpage() {
  const [name, setName] = useState("");
  const [empno, setEmpno] = useState("");
  const [role, setRole] = useState("");
  const [mail, setMail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const addEmployee = async (e) => {
    e.preventDefault();
    if (name === "" || empno === "" || role === "" || mail === "") {
      alert("Please fill all the columns..");
      return; // Exit early if validation fails
    }
    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3456/employees", {
        name: name,
        empnumber: empno,
        email: mail,
        role: role,
      });
      alert(`Employee: ${response.data.name} details added successfully`);
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="add-page-container">
      <h2>Add Employee</h2>
      <form className="employee-form" onSubmit={addEmployee}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="empno">Employee number</label>
        <input
          type="text"
          id="empno"
          value={empno}
          onChange={(e) => setEmpno(e.target.value)}
          placeholder="Enter your employee number"
        />

        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter your role"
        />

        <label htmlFor="mail">Mail id</label>
        <input
          type="text"
          id="mail"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Enter your mail"
        />

        <div className="button-container">
          {!isLoading ? <button type="submit">Submit</button> : <div>Loading...</div>}
        </div>
      </form>
    </div>
  );
}

export default Addpage;
