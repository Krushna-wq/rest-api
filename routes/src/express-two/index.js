import express from "express";

const app = express();
const PORT = 4050;

const students = [
    { id: 1, name: "ABC", course: "BTech" },
    { id: 2, name: "XYZ", course: "BCA" },
    { id: 3, name: "ALEX", course: "BSc" }
];

app.get('/student', (req, res) => {
    res.send("Welcome to student dashboard");
})

app.get('/student/:id', (req, res) => {
    const id = Number(req.params.id);      
    const student = students.find((s) => s.id == id);


    if (!student) {
        return res.status(404).json({ message: "Student not found!"});
    }

    res.json(student);
});

app.listen(PORT, () => {
       console.log(`Server is running on http://localhost:${PORT}`);
});

