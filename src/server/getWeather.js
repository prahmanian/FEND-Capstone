// This function calls the Pixabay API to return a image URL based on destination
const dotenv = require('dotenv');
dotenv.config();

const getWeather = async (lat='', long='', daysTillTrip=0, date='') => {
    console.log(date);
    const forecastUrl = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHERBIT_API_KEY}&units=I&lat=${lat}&lon=${long}&days=`
    const historicalUrl = `http://api.weatherbit.io/v2.0/history/daily?key=${process.env.WEATHERBIT_API_KEY}&units=I&lat=${lat}&lon=${long}&start_date=${previousDate}&end_date=${previousDate}`

    // let currentDate = new Date();
    // travelDate = new Date(date);
    // let deltaMilliseconds = travelDate - currentDate;
    // let daysTillTrip = Math.round(deltaMilliseconds / 1000 / 60 / 60 / 24);
    // console.log("daysTillTrip", daysTillTrip)

    let previousDate = date.split('-');
    previousDate[0] = (parseInt(previousDate[0])-1).toString();
    previousDate = previousDate.join('-');
    // needs to be in yyyy-mm-dd format
    // previousDate = previousDate


    if (daysTillTrip < 8) {
        console.log(":::Fetching Weather Forcast:::");
        let result = await axios.get(forecastUrl+daysTillTrip.toString());
        console.log('Weatherbit Forecast API:', result.status, result.statusText, result.ok);

        if (result.ok) {
            let forecastArr = await result.json();
            const dateData = forecastArr.data.slice(-1);
            return {
                min_temp: dateData.min_temp,
                max_temp: dateData.max_temp,
                weather_description: dateData.weather.description,
                flag: 'forecast',
            };
        } else {
            console.log(`ERROR: code ${response.status} ${response.statusText}.`);
            return {
                min_temp: 'no data',
                max_temp: 'no data',
                weather_description: 'no data',
                flag: 'no data'
            };
        }
    } else {
        console.log(":::Fetching Historical Weather Data:::");
        let result = await axios.get(historicalUrl);
        console.log('Weatherbit Forecast API:', result.status, result.statusText, result.ok);

        if (result.ok) {
            let forecastArr = await result.json();
            return {
                min_temp: forecastArr.data.min_temp,
                max_temp: forecastArr.data.max_temp,
                weather_description: "This is historical data",
                flag: 'historical data',
            };
        } else {
            console.log(`ERROR: code ${response.status} ${response.statusText}.`);
            return {
                min_temp: 'no data',
                max_temp: 'no data',
                weather_description: 'no data',
                flag: 'no data'
            };
        }
    }
};

export { getWeather }
module.exports = getWeather


// // example forecast
// {  
//     "data":[  
//        {  
//          "valid_date":"2017-04-01",
//           "ts":1503954000,
//           "datetime":"2017-04-01",
//           "wind_gust_spd":16.7,
//           "wind_spd":6.4,
//           "wind_dir":45,
//           "wind_cdir":"NE",
//           "wind_cdir_full":"northeast",
//           "temp":25,
//           "max_temp":30,
//           "min_temp":26,
//           "high_temp":30,
//           "low_temp":24.5,
//           "app_max_temp":30.64,
//           "app_min_temp":23.64,
//           "pop":0,
//           "precip":0,
//           "snow":0,
//           "snow_depth":0,
//           "slp":1017,
//           "pres":1003.5,
//           "dewpt":17.8,
//           "rh":64.3,
//           "weather":{  
//              "icon":"c04d",
//              "code":"804",
//              "description":"Overcast clouds"
//           },
//           "pod":"d",
//           "clouds_low":25,
//           "clouds_mid":100,
//           "clouds_hi":50,
//           "clouds":100,
//           "vis":10,
//           "max_dhi":178,
//           "uv":2,
//           "moon_phase":0.99,
//           "moon_phase_lunation":0.48,
//           "moonrise_ts":1530341260,
//           "moonset_ts":1530351260,
//           "sunrise_ts":1530321260,
//           "sunset_ts":1530391260
//        }, ...
//     ],
//     "city_name":"Raleigh",
//     "lon":"-78.63861",
//     "timezone":"America\/New_York",
//     "lat":"35.7721",
//     "country_code":"US",
//     "state_code":"NC"
//  }


// //  example history
// {  
//     "timezone":"America\/New_York",
//     "state_code":"NC",
//     "lat":35.7721,
//     "lon":-78.63861,
//     "country_code":"US",
//     "station_id":"723060-13722",
//     "sources":["723060-13722", "USC00445050", "USW00013732"],
//     "data":[  
//        {  
//           "rh":70.2,
//           "wind_spd":3.8,
//           "slp":1022,
//           "max_wind_spd":6.7,
//           "max_wind_dir":220,
//           "max_wind_spd_ts":1483232400,
//           "wind_gust_spd":12.7,
//           "min_temp_ts":1483272000,
//           "max_temp_ts":1483308000,
//           "dewpt":1.8,
//           "snow":0,
//           "snow_depth":1.0,
//           "precip":10.5,
//           "precip_gpm":13.5,
//           "wind_dir":189,
//           "max_dhi":736.3,
//           "dhi":88,
//           "max_temp":10,
//           "pres":1006.4,
//           "max_uv":5,
//           "t_dhi":2023.6,
//           "datetime":"2020-08-04",
//           "temp":7.86,
//           "min_temp":5,
//           "clouds":43,
//           "ts":1483228800
//        }, ...
//     ],
//     "city_name":"Raleigh",
//     "city_id":"4487042"
//  }