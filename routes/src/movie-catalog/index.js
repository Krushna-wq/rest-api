import express from "express";

const app = express();
const port = 4041;

const movies = [
  {
    "id": 1,
    "title": "Inception",
    "genre": "Sci-Fi",
    "year": 2010
  },
  {
    "id": 2,
    "title": "Interstellar",
    "genre": "Sci-Fi",
    "year": 2014
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "genre": "Action",
    "year": 2008
  },
  {
    "id": 4,
    "title": "3 Idiots",
    "genre": "Comedy/Drama",
    "year": 2009
  },
  {
    "id": 5,
    "title": "Dangal",
    "genre": "Sports/Drama",
    "year": 2016
  }
];


app.get('/movies', (req, res) => {
    res.json(movies);
});

app.get('/movies/random', (req, res) => {
    const val = Math.floor(Math.random() * movies.length);
    res.send(movies[val].title);
})

app.get('/movies/count', (req, res) => {
    res.json({totalMovies: movies.length});
});

app.post('/movies', (req, res) => {
    res.status(201).send("Movie added successfully");
});


app.get('/catalog-info', (req, res) => {
    res.json({catalogName: "My Movie Collection", totalMovies: movies.length, lastUpdated: "2026"});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});