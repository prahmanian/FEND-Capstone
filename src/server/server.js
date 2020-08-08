// require dependencies
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

// import functions
const getImageUrl = require('./getImage');
const getLatLong = require('./getLatLong');
const getDaysTillTrip = require('./getDaysTillTrip');
const getWeather = require('./getWeather');

// variables
let tripLog = [];
let tripInfo = {
    city: '',
    state: '',
    latitude: '',
    longitude: '',
    date: '',
    image: '',
    countdown: '',
    weatherInfo: '',
    tempLow: '',
    tempHigh: '',
    weatherDescription: ''
}


// create express app
const app = express();

/* Dependencies */
dotenv.config();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// point to dist folder
app.use(express.static('dist'));

/* Setup Server */
const port = 8080;

// Spin up the server
const server = app.listen(port, listening);

// Callback to debug
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);

// root route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
});

// get trip route sends the tripInfo object to client
app.get('/trip', (req, res) => {
    res.send(tripInfo);
});

// get all route sends the tripLog array to client.
// tripLog array contains saved tripInfo objects.
app.get('/all', (req, res) => {
    res.send(tripLog);
});



// get city image from pixabay
app.post('/image', async (req, res) => {
    
    // example api call
    // https://pixabay.com/api/?key=17815624-4d21eae3a9bb27b4e461dcb89&q=yellow+flowers&image_type=photo
    
    const baseUrl = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&image_type=photo&q=`
    const searchTerm = encodeURIComponent(req.body)

    try {
        const result = await axios.get(baseUrl+searchTerm);
        if (result.totalhits > 0) {
            return result.hits[0].webformatURL
        } else {
            console.log("No image results")
        }

    } catch (error) {
        console.log(`Error = ${error}`);
    }
})


// post trip route
app.post ('/trip', async (req, res) => {
    try {
        console.log(req.body);
        tripInfo.city = req.body.city;
        tripInfo.state = req.body.state;
        tripInfo.date = req.body.date;

        tripInfo.countdown = getDaysTillTrip(tripInfo.date); //possibly need to add .toString()

        // fetch image url from pixabay api
        tripInfo.image = await getImageUrl(tripInfo.city, tripInfo.state);

        // fetch latitude and longitude from geonames api
        let geoData = await getLatLong(tripInfo.city, tripInfo.state);
        tripInfo.latitude = geoData.latitude;
        tripInfo.longitude = geoData.longitude;

        // fetch weather data from weatherbit api
        let weatherData = await getWeather(tripInfo.latitude, tripInfo.longitude, tripInfo.countdown, tripInfo.date);
        tripInfo.tempHigh = weatherData.max_temp;
        tripInfo.tempLow = weatherData.min_temp;
        tripInfo.weatherDescription = weatherData.weather_description;
        tripInfo.weatherInfo = weatherData.flag;

        res.send(tripInfo);

    } catch (error) {
        console.log(`Error = ${error}`);
    }
});
}
