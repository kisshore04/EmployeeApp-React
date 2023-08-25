const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter your name..']
        },
        empnumber: {
            type: String,
            required: [true, 'Please enter your employee number']
        },
        email: {
            type: String,
            required: [true, 'Please enter your email'],
            unique: true
        },
        role: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

const employee = mongoose.model('employee', employeeSchema)

module.exports = employee;