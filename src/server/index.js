var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// bodyparser to read form input and store it as a js object
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// node-fetch for fetch()
const fetch = require("node-fetch");

// cors for cross origin allowance
const cors = require('cors')
app.use(cors())

// dotenv to hide api key in environment/.env file
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.meaningcloud.com/sentiment-2.1?';
const API_URL = `${BASE_URL}key=${API_KEY}&url=${clientData}`
let clientData = []

// API_URL = `${BASE_URL}key=${API_KEY}&url=${userInput}`

// instantiate app instance
const app = express()
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// POST Route
app.post('/api', async function(req, res) {
    clientData = req.body.url;
    console.log(clientData);

    const response = await fetch(API_URL)
    const meaningCloudRes = await response.json()
    console.log(meaningCloudRes)
    res.send(meaningCloudRes)
})

