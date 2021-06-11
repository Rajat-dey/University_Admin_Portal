const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const studentList = [];

app.use(bodyParser.json());

app.get('/api/studentList', (req, res) => {
  res.json(studentList);
});

app.post('/api/student', (req, res) => {
  const student = req.body.student;
  studentList.push(student);
  res.json("Student Added Successfully");
});

app.get('/', (req,res) => {
    res.send('Initial Setup works perfectly');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});