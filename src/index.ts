import express from "express"

const app = express();
const PORT = 5000

app.use(express.json()) //lets Express read JSON from request body

app.get("/", (req, res) => {
    res.json({msge: "Hello Notes API is runnig"})
})

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})