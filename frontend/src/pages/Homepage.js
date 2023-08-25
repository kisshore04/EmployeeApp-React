import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Employee from '../components/Employee';

function Homepage() {

    const [employees, setEmployees] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getEmployees();
    }, []);


    const getEmployees = async () => {

        try {
            const response = await axios.get('http://localhost:3456/employees')
            // const employeeArray = Object.values(response)
            const employeeArray = response.data.employee
            setEmployees(employeeArray)

        } catch (error) {
            console.log(error)

        }

    }



    return (
        <>
            <div>
                {
                    employees.map((employee) => {
                        return (
                            <Employee employee={employee} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Homepage