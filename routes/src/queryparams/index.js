import express from 'express';

const app = express();
const port = 4052;

app.get('/search', (req, res) => {
    console.log(req.query);
    console.log(req.query.name);
    console.log(req.query.city);
    res.json(req.query);
});

app.listen(port, () => {
    console.log(`server is running of http://localhost:${port}`);
})