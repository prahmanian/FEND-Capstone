# FEND-Capstone: Travel App
This is my capstone project in the Udacity Front-End NanoDegree program.

This app allows a user to enter their destination and travel date for upcoming trips and receive information back, namely an image of the destination, and weather data based on upcoming forecast or historical data.

## Technology Stack
- HTML
- CSS(SASS)
- JavaScript
- Jest
- Babel
- Node.js (Express)
- Webpack

### Buildtools
We make use of Webpack to build our project. Two configurations are included along with their configuration files: Development (webpack.dev.js) and Production (webpack.prod.js). 

## Setup and Instructions
### Install all required packages
'''bash
npm install
'''
### Create Development Build
'''bash
npm run build-dev
'''
### Create Production Build
'''bash
npm run build-prod
'''
### Start Express Server
'''bash
npm run start
'''
### Run Test Suite
'''bash
npm run test
'''

## External APIs Used
We will be accessing three external apis in this project.
### Weatherbit API
We will use the Weatherbit api [weatherbit](https://www.weatherbit.io/api) to access weather data based on user input and timeframe. This api requires coordinate input.
### Geonames API 
We will use the Geonames api [geonames](https://www.geonames.org/export/web-services.html) to convert our user input to coordinates to use in calling the Weatherbit api.
### Pixabay API
We will use the Pixabay api [pixabay](https://pixabay.com/api/docs/) to get a display image for the trip locations.


## Testing
We are using Jest for unittesting. A test suite has been provided for each javascript function in the src/js directory. These tests are found in the __test__ directory. To run unittests in the terminal use the command:

'''bash
npm run test
'''

## Offline Compatibility
