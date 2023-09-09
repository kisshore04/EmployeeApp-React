import React, { useEffect, useState } from "react";
import axios from "axios";
import Employee from "../components/Employee";
import "./../styles/Homepage.css"; // Import your custom styles

function Homepage() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedEmployees, setSortedEmployees] = useState([]);

  useEffect(() => {
    getEmployees();
    // search.toLowerCase()
  }, []);

  const getEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:3456/employees");
      const employeeArray = response.data.employee;
      setEmployees(employeeArray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = () => {
    const sorted = [...employees].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });

    // Update the employees state with the sorted array
    setEmployees(sorted);
    setSortedEmployees(sorted);

    // Toggle the sort order between ascending and descending
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="homepage-container">
      <div className="home-container">
        <div>
          <h3>Employee Details</h3>
        </div>
        <div className="feature-container">
          <input
            placeholder="Search employee.."
            onChange={(e) => setSearch(e.target.value)}
            className="search-bar"
          />
          <button onClick={handleSort} className="sort-button">
            Sort by Name
          </button>
        </div>
      </div>
      {/* deploying the search functionality right before we list out the data  */}
      {/* Error correction note */}
      {/* I was using a unwanted ternary operator which made me to not show the actual employees related to my search box!! */}
      {/* {(search ? sortedEmployees : employees)
        .filter((employee) => {
          return search.trim() === ""
            ? true
            : employee.name.toLowerCase().includes(search.toLowerCase());
        }) */}
      {employees
        .filter((employee) => {
          return search.trim() === ""
            ? true
            : employee.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((employee) => (
          <Employee
            employee={employee}
            getEmployees={getEmployees}
            key={employee.id}
          />
        ))}
    </div>
  );
}

export default Homepage;
