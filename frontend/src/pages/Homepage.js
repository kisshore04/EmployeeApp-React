import React, { useState } from 'react'
import axios from 'axios'
import { response } from 'express';
function Homepage() {

    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getEmployees = async () => {
        await axios.get('http://localhost:3456/employees')
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => console.log(err))
    }
    return (
        <>

        </>
    )
}

export default Homepage