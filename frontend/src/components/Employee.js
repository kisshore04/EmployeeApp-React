import React from 'react'

function Employee({ employee }) {
    return (
        <div key={employee._id}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h1 style={{ padding: '10px' }}> {employee.name}</h1>
                <h2 style={{ padding: '10px' }}> {employee.empnumber}</h2>
                <h4 style={{ padding: '10px' }}>{employee.role}</h4>
                <h3 style={{ padding: '10px' }}>{employee.email}</h3>
            </div>
        </div>
    )
}

export default Employee