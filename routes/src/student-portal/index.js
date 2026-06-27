import express from 'express';
import logger from './middleware/logger.js';
import authcheck from './middleware/auth.js';
import timer from './middleware/timer.js';

const app = express();
const port = 4053;

app.use(express.json());
app.use(logger);
app.use(timer);

const students = [
  { id: 1, name: "Rahul", age: 20, course: "Computer Science" },
  { id: 2, name: "Priya", age: 22, course: "Mechanical" },
  { id: 3, name: "Amit", age: 21, course: "Electronics" },
  { id: 4, name: "Sara", age: 23, course: "Computer Science" },
  { id: 5, name: "Rohan", age: 20, course: "Civil" },
];

app.get('/student', authcheck, (req, res) => {
  console.log(`Request took ${Date.now() - req.startTime}ms`);
  res.json(students);
});

app.get('/student/search', (req, res) => {
  const name = req.query.name?.toLowerCase();
  const student = students.find((u) => u.name.toLowerCase() === name);
  if (!student) {
    return res.status(404).json({ message: "Student Not Found" });
  }

  res.json(student);
});

app.get('/student/:id', authcheck, (req, res) => {
  const student = students.find((s) => s.id === Number(req.params.id));
  if (!student) {
    return res.status(404).json({ message: "Student Not Found" });
  }

  console.log(`Request took ${Date.now() - req.startTime}ms`);
  res.json(student);
});

app.post('/student', (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "Student added", student: req.body });
});

app.listen(port, () => console.log(`server is running on http://localhost:${port}`));

