const express = require('express')
const mongoose = require('mongoose')
const Employee = require('./Models/EmployeeModel');
const employee = require('./Models/EmployeeModel');
const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Routes
app.get('/', (req, res) => {
    res.send("Hello node is deployed!")
})

// app.get('/check', (req, res) => {
//     res.send("Is this working now? yes it's working!")
// })

mongoose.connect('mongodb+srv://kisshore:GKasG1GQWVCwG4tz@samples.wmodxfr.mongodb.net/Employees?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("mongoDB connected!")
    })
    .catch((err) => console.log(err))

//Create an Employee
app.post('/employees', async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
        console.log("Data created!")
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message })
    }
})

//Read an employee
app.get('/employees', async (req, res) => {
    try {
        const employee = await Employee.find({})
        res.status(200).json({ employee })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Read an particular employee by ID
app.get('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findById(id);
        res.status(200).json(employee)
        // console.log(`${} is fetched`)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})

//Update an particular employee by ID
app.put('/employees/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.findByIdAndUpdate(id, req.body);
        if (!employee) {
            res.status(404).json({ message: `Cannot find an employee with a ID : ${id}` })
        }
        const updatedEmployee = await Employee.findById(id);
        res.status(200).json(updatedEmployee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete an employee by ID
app.delete('/employees/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await Employee.findByIdAndDelete(id);
        if (!employee) {
            res.status(404).json({ message: `Cannot find an employee with a ID : ${id}` })
        }
        // const updatedEmployee = await Employee.findById(id);
        res.status(200).json({ message: `Employee with ID:${id} has been deleted` })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

const PORT = 3456;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

