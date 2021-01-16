var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

const cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const route = require('./route');
app.use('/', route);

const API_BASE = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const API_KEY = process.env.API_KEY;
console.log(`API KEY: ${API_KEY}`)


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
