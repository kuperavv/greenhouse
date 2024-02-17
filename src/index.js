import express from 'express'
import bodyParser from 'body-parser'

const PORT = 3001;
const app = express();

const data = {
    "temperature": 80
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json(data)
})

app.post("/data", (req, res) => {
    data.temperature = Number(req.body.temperature)
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})