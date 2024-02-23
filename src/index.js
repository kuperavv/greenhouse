import express from 'express'
import bodyParser from 'body-parser'

// local ip: 10.0.0.164
const PORT = 3001;
const app = express();

let data = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json(data);
})

app.post("/data", (req, res) => {
    if (req.headers['x-secret-auth'] === 'AWESOME_GREENHOUSE') {
        data = req.body;
    }
    res.sendStatus(200);
})



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})