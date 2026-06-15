import express from "express";

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("Welcome to express app");
});

app.get('/about', (req, res) => {
    res.send("<h1>This is the about page</h1>");
});

app.get('/contact', (req, res) => {
    res.json({email: "you@example.com", phone: '1234567890'});
})

app.post('/contact', (req, res) => {
    res.status(201).send("Contact form submitted");
});

app.get('/product', (req, res) => {
    res.json([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Tablet' }
    ]);
});


app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));