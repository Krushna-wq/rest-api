import express from "express";

const app = express();
const port = 4040;


const books = [
  {
    "id": 1,
    "title": "Atomic Habits",
    "author": "James Clear"
  },
  {
    "id": 2,
    "title": "The Alchemist",
    "author": "Paulo Coelho"
  },
  {
    "id": 3,
    "title": "Clean Code",
    "author": "Robert C. Martin"
  },
  {
    "id": 4,
    "title": "Deep Work",
    "author": "Cal Newport"
  }
]

app.get('/books', (req, res) => {
  res.json(books);
});

app.get('/books/welcome', (req, res) => {
    res.send("Welcome to library API");
});

app.post('/books', (req, res) => {
    res.status(201).send("Book added successfully");
});

app.get('/library-info', (req, res) => {
    res.json({name: "City library", openTime: "9 AM", closeTime: "8 PM", totalBooks: books.length})
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));