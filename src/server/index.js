var path = require('path')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')

// express setup
const express = require('express')
const app = express()
app.use(express.static('dist'))

// cors setup
const cors = require('cors');
app.use(cors());

// bodyParser setup
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


console.log(__dirname)

// dotenv to hide API_KEY
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY
let clientData = []

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// POST Route
app.post('/api', async function(req, res) {
    clientData = req.body.url;
    const API_URL = `https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${clientData}&lang=en`

    const response = await fetch(API_URL)
    const apiData = await response.json()
    console.log(apiData)
    res.send(apiData)
})

// listening port setup
const port = 3030;
app.listen(port, function () {
    console.log(`Your API Key is ${process.env.API_KEY}`);
    console.log(`Example app listening on port ${port}!`);
})