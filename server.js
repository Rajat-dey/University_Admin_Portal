const express = require('express');    //Used Express for the NodeJS api development
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const studentList = [];

app.use(bodyParser.json());

//With the help body Parser api is created below which gets active on port 3000

app.get('/api/studentList', (req, res) => {
  res.json(studentList);
});

app.post('/api/student', (req, res) => {
  const student = req.body.student;
  studentList.push(student);
  res.json("Student Added Successfully");  //On successful of api call particular msz comes out on response
});

app.get('/', (req,res) => {
    res.send('Initial Setup works perfectly');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});