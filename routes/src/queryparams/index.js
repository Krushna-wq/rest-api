import express from 'express';

const app = express();
const port = 4052;

app.use(express.json());

const books = [
  { id: 1, title: "Atomic Habits", author: "James Clear", genre: "Self Help" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction" },
  { id: 3, title: "Clean Code", author: "Robert Martin", genre: "Tech" },
  { id: 4, title: "Deep Work", author: "Cal Newport", genre: "Self Help" },
  { id: 5, title: "Harry Potter", author: "J.K. Rowling", genre: "Fiction" },
];

app.get('/books/search', (req, res) =>{
    const titles = (req.query.title).toLowerCase();
    const book = books.find((u) => u.title.toLowerCase() == titles);

    if(!book){
    return res.status(404).json({message: "No Book Found"});
}
res.json(book);
});

app.get('/books/filter', (req, res) => {
    const genres = (req.query.genre)
    const filtered = books.filter((f) => f.genre.toLowerCase() == genres);

    if(filtered.length == 0){
        return res.status(404).json({message: "Book No Found"});
    };
    res.json(filtered);
});

app.post('/books', (req, res) => {
    res.status(201).send("Book Added").json(eq.body);
    console.log(req.body);
})







app.listen(port, () => console.log(`Server is running of http://localhost:${port}`));